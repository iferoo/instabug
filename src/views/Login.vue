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
