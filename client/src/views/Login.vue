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
                    <p
                        class="paragraph--large"
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button class="btn btn--primary" @click="toLogin">Login</button>
                    <app-form :loginFormType="loginFormType" />
                </div>
            </div>
        </section>
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
            loginFormType: false
        };
    },
    methods: {
        toLogin() {
            this.loginFormType = true;
        },
        toSignUp() {
            this.loginFormType = false;
        }
    }
};
</script>
