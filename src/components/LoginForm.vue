<template>
  <div class="form">
    <form @submit.prevent="handleSubmit" novalidate="true">
      <div data-cy="invalidUserAlert" class="alert" v-if="invalidUser">
        <p>Your email and/or your password are incorrect</p>
      </div>
      <div class="group">
        <label class="label" for="work-email">Work Email</label>
        <input
          name="email"
          class="input"
          v-bind:class="{ error: hasEmailError }"
          @focusout="emailErrorFlag = true"
          id="work-email"
          type="email"
          placeholder="you@company.com"
          v-model="email"
          data-cy="emailInput"
        />
        <p class="error" data-cy="emailError" v-if="hasEmailError">
          Enter a valid email address
        </p>
      </div>

      <div class="group">
        <div class="label password">
          <label for="password"> Password </label>
          <a class="forget" href="#">forget password?</a>
        </div>
        <input
          name="password"
          class="input"
          v-bind:class="{ error: hasPasswordError }"
          id="password"
          type="password"
          placeholder="8+ Characters"
          v-model="password"
          v-on:focusout="passwordErrorFlag = true"
          data-cy="passwordInput"
        />
        <p class="error" v-if="hasPasswordError">
          Password must be eight characters or more
        </p>
      </div>
      <button
        v-bind:disabled="submitDisabled"
        class="btn primary"
        data-cy="loginSubmit"
      >
        Log in
      </button>
      <div class="signup">
        <p>Don't have account? <a href="#">Signup</a></p>
        <a href="#">Login via SSO</a>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "LoginForm",
  data: function () {
    return {
      usersData: [
        { email: "mohamed@instabug.com", password: "12345678" },
        { email: "mohamed1@instabug.com", password: "12345678" },
        { email: "mohamed2@instabug.com", password: "12345678" },
        { email: "mohamed3@instabug.com", password: "12345678" },
        { email: "mohamed4@instabug.com", password: "12345678" },
        { email: "mohamed5@instabug.com", password: "12345678" },
        { email: "mohamed6@instabug.com", password: "12345678" },
        { email: "mohamed7@instabug.com", password: "12345678" },
      ],
      email: "",
      password: "",
      emailErrorFlag: false,
      passwordErrorFlag: false,
      invalidUser: false,
    };
  },
  computed: {
    hasEmailError: function () {
      return (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.email
        ) && this.emailErrorFlag
      );
    },
    // this function to check that password contain 8 or more chars
    hasPasswordError: function () {
      return !/.{8,}/.test(this.password) && this.passwordErrorFlag;
    },
    // We can use this function to validate password contain 8 or more chars and
    // at least one uppercase letter and one number and don't contain the email name address
    // hasPasswordError: function () {
    //   return (
    //     (!/(?=.*\d)(?=.*[A-Z]).{8,}/.test(this.password) ||
    //       (this.password.includes(this.email) && this.email !== "")) &&
    //     this.passwordErrorFlag
    //   );
    // },
    submitDisabled: function () {
      return (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.email
        ) || !/.{8,}/.test(this.password)
      );
    },
  },
  methods: {
    handleSubmit: function () {
      const user = this.usersData.find(
        (user) => user.email === this.email && user.password === this.password
      );
      if (user) {
        localStorage.setItem("email", user.email);
        this.invalidUser = false;
        router.go("/welcome");
      } else this.invalidUser = true;
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../sass/abstracts/_variables"
.form
  width: 100%

  .alert
    padding: 0.5rem
    margin-bottom: 1rem
    border: 1px solid rgba(0,0,0,0.25)
    border-radius: 3px
    color: $color-alert-text
    background-color: $color-alert

  .group   
    margin-bottom: 2vh
    label
      display: block
        font-size: 1rem
        margin-bottom: 0.2rem
    .password
        display: flex
        justify-content: space-between
    .forget
        color: $color-link-grey
        text-decoration: none

        &:hover, &:focus, &:active
          color: $color-link-blue


    input
      display: block
      padding: .4rem 1rem
      width: 100%
      border: 1px solid #dcdee3
      border-radius: 4px
      // height: 4rem
      outline: none
      &:focus
        border-color: #09f
        box-shadow: inset 0 0 4px 0 #09f
      &.error
        border-color: #f24220
        box-shadow: none

    .error
      color: #f24220
      font-size: .8rem
      margin-top: 0.3rem
      list-style: inside

  .btn
    font-size: 1rem
    font-weight: 600
    width: 100%
    text-align: center
    border-radius: 4px
    border: none
    cursor: pointer
    padding: 1.5vh
    margin-bottom: 1vh

  .primary
    background-color: $color-primary
    color: $color-white
    
    &:hover
      background-color: $color-btn-hover
    
    &:disabled
      cursor: not-allowed
      background-color: $color-btn-disabled

  .signup
    display: flex
    justify-content: space-between
    a
      color: $color-link-blue
      text-decoration: none

      &:hover, &:focus, &:active
        color: $font-color
</style>
