<template>
  <div class="container">
    <Slider />
    <LoginForm />
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "LoginPage",
  components: { Slider, LoginForm },
};
</script>

<style lang="sass">
.container
  display: flex
  align-items: center
  justify-content: space-evenly
  height: inherit

@media screen and (min-width: 128px) and (max-width: 1024px)
  .container
    flex-direction: column
    height: fit-content
</style>
