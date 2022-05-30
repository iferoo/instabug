<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="sass">
@import "sass/_variables"
*
  margin: 0
  padding: 0
  box-sizing: border-box
  margin: 0
  padding: 0
  color: $font-color
  font-weight: 400
  font-family: 'ProximaNova', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  line-height: 1.4
.app
  height: 100vh
</style>
