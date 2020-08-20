import axios from "axios";
import router from "../../router/index";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
  error: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token,
  getAuthStatus: (state) => state.status,
  getUser: (state) => state.user,
  getError: (state) => state.error,
};

const actions = {
  // Login
  async login({ commit }, user) {
    commit("auth_request");
    try {
      let res = await axios.post("http://localhost:5001/api/users/login", user);
      if (res.data.success) {
        const token = res.data.token;
        const user = res.data.user;
        // Store token
        localStorage.setItem("token", token);
        // Set axios defaults
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth_success", token, user);
      }
      return res;
    } catch (error) {
      commit("auth_error", error);
      return error.response;
    }
  },

  // Register
  async register({ commit }, userData) {
    commit("register_request");
    try {
      let res = await axios.post("http://localhost:5001/api/users/register", userData);
      if (res.data.success !== undefined) {
        commit("register_success");
      }
      return res;
    } catch (error) {
      commit("register_error", error);
      return error.response;
    }
  },

  // Get user profile
  async getProfile({ commit }) {
    commit("profile_request");
    let res = await axios.get("http://localhost:5001/api/users/profile");
    commit("user_profile", res.data.user);
    return res;
  },

  // Logout
  async logout({ commit }) {
    await localStorage.removeItem("token");
    commit("logout");
    delete axios.defaults.headers.common["Authorization"];
    router.push("/login");
    return;
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
    state.error = null;
  },
  auth_success(state, token, user) {
    state.token = token;
    state.user = user;
    state.status = "success";
    state.error = null;
  },
  auth_error(state, error) {
    state.error = error.response.data.msg;
  },
  register_request(state) {
    state.status = "loading";
    state.error = null;
  },
  register_success(state) {
    state.status = "success";
    state.error = null;
  },
  register_error(state, error) {
    state.error = error.response.data.msg;
  },
  logout() {
    state.status = "";
    state.token = "";
    state.user = "";
    state.error = null;
  },
  profile_request(state) {
    state.status = "loading";
  },
  user_profile(state, user) {
    state.user = user;
    state.status = "success";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
