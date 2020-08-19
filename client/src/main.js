import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

// load token from localStorage
Vue.prototype.$http = axios;
const token = localStorage.getItem("token");

if (token) {
  Vue.prototype.$https.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
