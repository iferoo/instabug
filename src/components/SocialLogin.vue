<template>
  <div class="sso">
    <a class="btn google" href="#">
      <img src="../assets/btn_google_light_normal_ios.svg" alt="google" />
      <span>Google</span>
    </a>
    <a class="btn github" href="#">
      <img src="../assets/GitHub-Icon-White-Logo.wine.svg" alt="github" />
      <span>Github</span>
    </a>
    <a class="btn microsoft" href="#">
      <img src="../assets/microsoft.svg" alt="microsoft" />
      <span>Microsoft</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLogin",
};
</script>

<style lang="sass" scoped>
@import "../sass/variables"

.sso
    width: 100%
    height: fit-content
    display: flex
    flex-direction: column
    gap: 0.5rem


    a
        padding: .55vh
        width: 100%
        
        display: flex
        justify-content: space-between
        align-items: center
        text-decoration: none
        border-radius: 4px
        // height: fit-content
        img
            width: 5vh !important
            height: 5vh !important
            height: fit-content
        span
            width: 90%
            height: 100%
            display: flex
            justify-content: center
            align-items: center
            font-size: 0.95rem
            font-weight: 600
    
    .google
        background-color: $color-google
        span
            color: $color-white

    .github
        background-color: $color-github
        span
            color: $color-white

    .microsoft
        background-color: $color-white
        border: 1px solid #8c8c8c
        padding: 1.1vh
        img
            width: 3.5vh !important
            height: 3.5vh !important
        span
            color: $color-microsoft
</style>
