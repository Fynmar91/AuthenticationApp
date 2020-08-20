<template>
  <div>
    <h2>Profile</h2>
    <div class="card" v-if="getUser">
      <ul class="list-group">
        <li class="list-group-item">Name: {{ getUser.name }}</li>
        <li class="list-group-item">Username: {{ getUser.username }}</li>
        <li class="list-group-item">Email: {{ getUser.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["getProfile"]),
  },
  created() {
    this.getProfile();
  },
};
</script>

<style></style>
