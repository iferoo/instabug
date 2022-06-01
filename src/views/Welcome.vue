<template>
  <div class="welcome">
    <h2 data-cy="welcomeTitle" class="heading">Welcome to {{ email }}</h2>
    <button class="btn primary" @click="handleLogout">Logout</button>
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
@import "../sass/_variables"

.welcome
  text-align: center
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  .btn
    font-size: 1rem
    font-weight: 600
    width: 100%
    text-align: center
    border-radius: 4px
    border: none
    cursor: pointer
    padding: 1.5vh
    margin-bottom: 1vh

  .primary
    background-color: #a30b0b

    color: $color-white

    &:hover
      background-color: #a30b0bce



  .heading
    margin-bottom: 2rem
</style>
