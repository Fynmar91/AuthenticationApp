<template>
  <div id="app">
    <Navbar />
    <br />
    <br />
    <div class="container">
      <Errors v-if="getError" :msg="getError" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";

export default {
  components: {
    Navbar,
    Errors,
  },
  computed: {
    ...mapGetters(["getError"]),
  },
};
</script>

<style></style>
