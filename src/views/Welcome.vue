<template>
  <div class="welcome">
    <h2 data-cy="welcomeTitle" class="heading">Welcome to {{ email }}</h2>
    <button class="btn btn--primary" @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "WelcomePage",
  data: function () {
    return {
      email: localStorage.getItem("email"),
    };
  },
  methods: {
    handleLogout: function () {
      localStorage.removeItem("email");
      router.go("/login");
    },
  },
};
</script>

<style lang="sass">
.welcome
  text-align: center
  // padding: 10rem
  .heading 
    margin-bottom: 2rem
</style>
