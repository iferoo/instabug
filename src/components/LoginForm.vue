<template>
  <div class="login">
    <div class="container">
      <div class="logo">
        <img alt="Instabug logo" src="logo.svg" />
        <p>Log in to Instabug</p>
      </div>
      <SocialLogin />
      <span class="border">
        <div>
          <hr />
        </div>
        OR
        <div>
          <hr />
        </div>
      </span>
      <EmailLogin />
      <div class="companies">
        <h4>Trusted by the top companies.</h4>
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
import EmailLogin from "./EmailLogin.vue";
import SocialLogin from "./SocialLogin.vue";

export default {
  name: "LoginForm",
  components: {
    lyftIcon,
    buzzFeed,
    asana,
    onePlus,
    houseParty,
    EmailLogin,
    SocialLogin,
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/variables"
.login
  width: 50%
  height: 100vh
  .container
    width: 65%
    margin: 0 auto
    display: flex
    flex-direction: column
    justify-content: center
    align-items: stretch
    gap: 2vh
    

    .logo
      display: flex
      flex-direction: column
      align-items: center
      height: fit-content
      img
        width: 10vh
      p
        height: fit-content
        font-size: 1.5rem
        


    .border
      display: flex
      justify-content: space-between
      align-items: center
      div
        width: 45%
        hr
          color: $color-grey-light-2


    .companies
      color: $color-font-grey
      text-align: center

      h4
        margin-top: 1rem
        margin-bottom: .5rem
        color: $color-grey-dark-2

      .images
        color: $color-grey-dark-2
        display: flex
        justify-content: space-around
        align-items: center
        // gap: 1rem

        svg
          fill: $color-grey-dark-2
          object-fit: contain
          overflow: hidden

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

@media screen and (min-width: 1024px) and (max-width: 1280px)

@media screen and (min-width: 128px) and (max-width: 1024px)
  .login
    width: 100%
    height: fit-content
    display: flex
    justify-content: space-between
</style>
