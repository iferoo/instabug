<template>
  <div class="right">
    <div class="container">
      <div class="main">
        <img class="main__logo" alt="Instabug logo" src="logo.svg" />
        <h3 class="heading">Log in to Instabug</h3>
      </div>

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
      <span class="border">
          <div>
            <hr />
          </div>
          OR
          <div>
            <hr />
          </div>
        </span>
      <!-- <LoginForm /> -->
      <LoginForm />
      <div class="clients">
        <h4 class="title">Trusted by the top companies.</h4>
        <div class="images">
          <lyftIcon class="lyft" />
          <buzzFeed class="buzz" />
          <asana class="asana" />
          <onePlus class="one" />
          <houseParty class="house" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lyftIcon from "@/assets/lyftIcon";
import buzzFeed from "@/assets/buzzFeed";
import asana from "@/assets/asana";
import onePlus from "@/assets/onePlus";
import houseParty from "@/assets/houseParty";
import LoginForm from "./LoginForm.vue";

export default {
  name: "LoginRight",
  components: {
    lyftIcon,
    buzzFeed,
    asana,
    onePlus,
    houseParty,
    LoginForm,
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/variables"
.right
  width: 50%
  height: 100vh
  .container
    width: 65%
    margin: 0 auto
    display: flex
    flex-direction: column
    align-items: initial
    justify-content: center
    gap: 2vh

    .main
      display: flex
      flex-direction: column
      align-items: center
      height: fit-content
      img
        width: 10vh
      h3
        height: fit-content

    .sso
      width: 100%
      height: fit-content
      display: flex
      flex-direction: column
      gap: 0.5rem

      a
        padding: .2vh
        width: 100%
        display: flex
        justify-content: space-between
        text-decoration: none
        height: fit-content
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
        color: $color-microsoft
        border: 1px solid #8c8c8c
        padding: 5px
        line-height: $btn-height - 10px
        img
          width: 3.5vh !important
          height: 3.5vh !important
    .border
      display: flex
      justify-content: space-between
      align-items: center
      div
        width: 45%


    .clients
      color: $color-font-grey
      text-align: center

      .title
        margin: .5rem 0

      .images
        color: $color-grey-dark-2
        display: flex
        justify-content: space-around
        align-items: center    
        gap: 1rem 

        svg
          fill: currentColor
          // object-fit: contain
          // overflow: hidden

        .lyft
          width: 27.5px
          height: 19.2px
        .buzz
          width: 77.6px
          height: 12.1px
        .asana
          width: 81px
          height: 19px
        .one
          width: 89px
          height: 35px
        .house
          width: 107px
          height: 17px
</style>
