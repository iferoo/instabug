<template>
  <div :style="slides[counter].imageUrl">
    <div class="dots" style="">
      <p>{{ slides[counter].text }}</p>
      <ul>
        <li
          class="dot"
          :class="counter == 0 ? 'active' : ''"
          @click="counter = 0"
        ></li>
        <li
          class="dot"
          :class="counter == 1 ? 'active' : ''"
          @click="counter = 1"
        ></li>
        <li
          class="dot"
          :class="counter == 2 ? 'active' : ''"
          @click="counter = 2"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginLeft",
  data: function () {
    return {
      slideInterval: 4000,
      counter: 0,

      slides: [
        {
          id: 1,
          imageUrl: {
            backgroundImage: `url(${require("../assets/LoginSlider/instabug1.jpeg")})`,
          },
          text: "Secure Crash Reporting With Real-Time Alerts",
        },
        {
          id: 2,
          imageUrl: {
            backgroundImage: `url(${require("../assets/LoginSlider/instabug3.jpeg")})`,
          },
          text: "Accelerate Your Entire Mobile Team Workflow",
        },
        {
          id: 3,
          imageUrl: {
            backgroundImage: `url(${require("../assets/LoginSlider/instabug4.svg")})`,
          },
          text: "The Most Comprehensive Bug Reporting Tool For Mobile Apps",
        },
      ],
    };
  },
  mounted() {
    this.autoSlide();
  },
  methods: {
    autoSlide: function () {
      var v = this;
      setInterval(function () {
        if (v.counter >= v.slides.length - 1) {
          v.counter = 0;
        } else {
          ++v.counter;
        }
        // console.log(v.counter);
        // console.log(v.slides[v.counter]);
      }, this.slideInterval);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/abstracts/_variables"

div
  height: 100vh
  width: 50%
  position: relative
  background-color: $color-primary-dark
  /* background-image: url("../assets/LoginSlider/instabug1.jpeg") */
  background-position: top
  background-repeat: no-repeat
  background-size: cover

  .dots
    background-image: none
    background-color: transparent
    width: fit-content
    height: fit-content
    position: absolute
    top: 80%
    left: 50%
    transform: translate(-50%,-50%)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 5vh

    p
      height: fit-content
      color: $color-white
    ul
      display: flex
      gap: 1.5vh
      height: fit-content
      list-style: none
      li
        height: fit-content
        width: .5rem
        height: .5rem
        background-color: transparent
        border: solid 1px $color-white
        border-radius: 50%
        cursor: pointer
        &.active
          background-color: $color-white
</style>
