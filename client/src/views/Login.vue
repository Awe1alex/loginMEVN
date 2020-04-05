<template>
  <div class="login-page">
    <div class="login-container">
      <div class="row h-100">
        <div class="col-1-of-2 h-100">
          <div class="login-content">
            <h2 class="heading-secondary">Don't have an account?</h2>
            <span class="blue-line"></span>
            <p
              class="login-text"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, et, labore omnis consectetur esse ut quam eligendi nesciunt distinctio sequi recusandae cum nihil a tenetur!</p>
            <button class="btn btn-primary" @click="toSignUp">Sign Up</button>
          </div>
        </div>
        <div class="col-1-of-2 h-100">
          <div class="login-content">
            <h2 class="heading-secondary">Have an account?</h2>
            <span class="blue-line"></span>
            <p class="login-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button class="btn btn-primary" @click="toLogin">Login</button>
          </div>
        </div>
      </div>
      <app-form :login="login" />
    </div>
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
