<template>
  <div class="login__page">
    <section class="section-login">
      <div class="row">
        <div class="col-1-of-2">
          <h2 class="heading--secondary">Don't have an account?</h2>
          <span class="line line--blue"></span>
          <p
            class="paragraph--large"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, et, labore omnis consectetur esse ut quam eligendi nesciunt distinctio sequi recusandae cum nihil a tenetur!</p>
          <button class="btn btn--primary" @click="toSignUp">Sign Up</button>
        </div>
        <div class="col-1-of-2">
          <h2 class="heading--secondary">Have an account?</h2>
          <span class="line line--blue"></span>
          <p class="paragraph--large">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button class="btn btn--primary" @click="toLogin">Login</button>
          <app-form :login="login" />
        </div>
      </div>
    </section>
    <!-- <div class="login__container">
      <div class="row h-100">
        <div class="col-1-of-2 h-100">
          <div class="login__content">
            <h2 class="heading__secondary">Don't have an account?</h2>
            <span class="blue-line"></span>
            <p
              class="login__text"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, et, labore omnis consectetur esse ut quam eligendi nesciunt distinctio sequi recusandae cum nihil a tenetur!</p>
            <button class="btn btn__primary" @click="toSignUp">Sign Up</button>
          </div>
        </div>
        <div class="col-1-of-2 h-100">
          <div class="login__content">
            <h2 class="heading__secondary">Have an account?</h2>
            <span class="blue__line"></span>
            <p class="login__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class="btn btn__primary" @click="toLogin">Login</button>
          </div>
        </div>
      </div>
      <app-form :login="login" />
    </div>-->
  </div>
</template>

<script>
// @ is an alias to /src
import AppForm from "@/components/AppForm.vue";

export default {
  name: "Home",
  components: {
    AppForm
  },
  data() {
    return {
      login: false
    };
  },
  methods: {
    toLogin() {
      this.login = true;
    },
    toSignUp() {
      this.login = false;
    }
  }
};
</script>
