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
  name: "SliderLogin",
  data: function () {
    return {
      slideInterval: 4000,
      counter: 0,

      slides: [
        {
          id: 1,
          imageUrl: {
            backgroundImage: `url(${require("../assets/LoginSlider/hrA.svg")})`,
          },
          text: "Accelerate Your Entire Mobile Team Workflow",
        },
        {
          id: 2,
          imageUrl: {
            backgroundImage: `url(${require("../assets/LoginSlider/hrB.svg")})`,
          },
          text: "The Most Comprehensive Bug Reporting Tool For Mobile Apps",
        },
        {
          id: 3,
          imageUrl: {
            backgroundImage: `url(${require("../assets/LoginSlider/hrV.svg")})`,
          },
          text: "Secure Crash Reporting With Real-Time Alerts",
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
      }, this.slideInterval);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/_variables"

div
  height: 100vh
  width: 50%
  position: relative
  background-color: $color-primary-dark
  background-position: center
  background-repeat: no-repeat
  background-size: 70vh
  // transition: 0.2s



  .dots
    background-image: none
    background-color: transparent
    width: 80%
    height: fit-content
    position: absolute
    top: 85%
    left: 50%
    transform: translate(-50%,-50%)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 2vh

    p
      height: fit-content
      color: $color-white
      font-size: 1.3rem
      text-align: center
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

@media screen and (min-width: 128px) and (max-width: 1024px) 
  div 
    width: 100%
    background-size: 50vh
</style>
