<template>
  <div class="container">
    <LoginLeft />
    <LoginRight />
  </div>
</template>

<script>
import LoginLeft from "@/components/LoginLeft.vue";
import LoginRight from "@/components/LoginRight.vue";
export default {
  name: "LoginPage",
  components: { LoginLeft, LoginRight },
};
</script>

<style lang="sass">
@import "../sass/views/Login"
.container
  display: flex
  align-items: center
  justify-content: space-evenly
  height: inherit
</style>
