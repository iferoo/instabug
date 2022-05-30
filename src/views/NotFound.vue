<template>
  <div class="notFound">
    <img src="../assets/NotFound.jpg" alt="not found" />
    <h2 class="heading">404 - Page Not Found!</h2>
    <p>Sorry, that page doesn't exist. what would you like to do?</p>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped lang="sass">
@import "../sass/variables"
.notFound
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  text-align: center

  img
    max-width: 100%
    margin-top: -10rem

  h2
    font-weight: 600
    color: $color-primary-dark
    margin-top: -5rem
    margin-bottom: 1.5rem
  
   
  p
    font-size: 1.6rem
    color: $color-font-grey

</style>
