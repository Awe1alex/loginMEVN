<template>
    <div class="login__page">
        <section class="section-login">
            <div class="row">
                <div class="col-1-of-2">
                    <h2 class="heading--secondary">Don't have an account?</h2>
                    <span class="line line--blue"></span>
                    <p class="paragraph--large">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem, possimus distinctio? Esse perferendis
                        perspiciatis repellendus dolores necessitatibus officia
                        quam quia accusantium at?
                    </p>
                    <button class="btn btn--primary" @click="toSignUp">
                        Sign Up
                    </button>
                </div>
                <div class="col-1-of-2">
                    <h2 class="heading--secondary">Have an account?</h2>
                    <span class="line line--blue"></span>
                    <p class="paragraph--large">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </p>
                    <button class="btn btn--primary" @click="toLogin">
                        Login
                    </button>
                    <app-form />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import AppForm from '@/components/AppForm.vue'

export default {
    name: 'Home',
    components: {
        AppForm,
    },
    methods: {
        toLogin() {
            this.$store.commit('toLogin')
        },
        toSignUp() {
            this.$store.commit('toSignup')
        },
    },
}
</script>
