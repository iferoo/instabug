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
  top: 40%
  left: 50%
  transform: translate(-50%,-50%)
  text-align: center

  img
    max-width: 100%
    margin-bottom: -5rem

  h2
    font-weight: 600
    color: $color-primary-dark

  p
    font-size: 1.3rem
    color: $color-font-grey

@media screen and (min-width: 280px) and (max-width: 768px) 
  .notFound
    width: 90%
    img
      max-width: 100%
      margin-bottom: 0
    h2
      font-size: 1.2rem

    p
      font-size: 1.1rem
      color: $color-font-grey
</style>
