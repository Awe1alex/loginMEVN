<template>
    <div class="container__form" :class="{ 'container__form--to-right': loginFormType }">
        <div class="logo__container">
            <img src="../assets/logo.png" alt="Logo" class="logo__img" />
        </div>
        <transition name="fade">
            <div v-if="loginFormType" class="forms--login">
                <form @submit.prevent="login()" class="form">
                    <h2 class="heading--secondary">Login</h2>
                    <span class="line line--blue"></span>
                    <transition name="slide">
                        <div
                            v-if="loginForm.errorMessage"
                            class="form__error"
                        >{{ loginForm.errorMessage }}</div>
                    </transition>
                    <div class="form__group">
                        <input
                            v-model.trim="$v.loginForm.email.$model"
                            type="email"
                            id="email"
                            class="form__input"
                            :class="{'form__input--invalid': $v.loginForm.email.$invalid && $v.loginForm.email.$dirty}"
                            placeholder="Email"
                            required
                        />
                        <label for="email" class="form__label">Email</label>
                        <i class="icon-email"></i>
                    </div>
                    <div class="form__group">
                        <input
                            v-model.trim="$v.loginForm.password.$model"
                            type="password"
                            id="password"
                            class="form__input"
                            :class="{'form__input--invalid': $v.loginForm.password.$invalid && $v.loginForm.password.$dirty}"
                            placeholder="Password"
                            required
                        />
                        <label for="password" class="form__label">Password</label>
                        <i class="icon-lock"></i>
                    </div>
                    <button
                        :disabled="$v.loginForm.email.$invalid || $v.loginForm.password.$invalid"
                        type="submit"
                        class="btn btn--warning"
                    >Login</button>
                </form>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="!loginFormType" class="forms--sign-up">
                <form class="form" @submit.prevent="signUp">
                    <h2 class="heading--secondary">Sign Up</h2>
                    <span class="line line--blue"></span>
                    <transition name="slide">
                        <div
                            v-if="signupForm.errorMessage"
                            class="form__error"
                        >{{ signupForm.errorMessage }}</div>
                    </transition>
                    <div class="form__group">
                        <input
                            v-model.trim="$v.signupForm.name.$model"
                            type="text"
                            id="name"
                            class="form__input"
                            :class="{'form__input--invalid': $v.signupForm.name.$invalid && $v.signupForm.name.$dirty}"
                            placeholder="Name"
                            required
                        />
                        <label for="name" class="form__label">Name</label>
                        <i class="icon-user"></i>
                    </div>
                    <div class="form__group">
                        <input
                            v-model.trim="$v.signupForm.email.$model"
                            type="email"
                            id="email"
                            class="form__input"
                            :class="{'form__input--invalid': $v.signupForm.email.$invalid && $v.signupForm.email.$dirty}"
                            placeholder="Email"
                            required
                        />
                        <label for="email" class="form__label">Email</label>
                        <i class="icon-email"></i>
                    </div>
                    <div class="form__group">
                        <input
                            v-model.trim="$v.signupForm.password.$model"
                            type="password"
                            id="password"
                            class="form__input"
                            :class="{'form__input--invalid': $v.signupForm.password.$invalid && $v.signupForm.password.$dirty}"
                            placeholder="Password"
                            required
                        />
                        <label for="password" class="form__label">Password</label>
                        <i class="icon-lock"></i>
                    </div>
                    <button
                        :disabled="$v.signupForm.name.$invalid || $v.signupForm.email.$invalid || $v.signupForm.password.$invalid"
                        type="submit"
                        class="btn btn--warning"
                    >Sign Up</button>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            loginForm: {
                email: "",
                password: "",
                errorMessage: false
            },
            signupForm: {
                name: "",
                email: "",
                password: "",
                errorMessage: false
            },
            errorMessage: false
        };
    },
    validations: {
        signupForm: {
            name: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8)
            }
        },
        loginForm: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8)
            }
        }
    },
    computed: {
        ...mapState(["loginFormType"])
    },
    methods: {
        signUp() {
            const payload = {
                name: this.signupForm.name,
                email: this.signupForm.email,
                password: this.signupForm.password
            };
            this.$store
                .dispatch("signup", payload)
                .then(res => {})
                .catch(err => {
                    this.signupForm.password = "";
                    this.signupForm.email = "";
                    this.signupForm.name = "";
                    this.signupForm.errorMessage = err.response.data.data
                        ? err.response.data.data[0].msg
                        : err.response.data.message;
                });
        },
        login() {
            const payload = {
                email: this.loginForm.email,
                password: this.loginForm.password
            };
            this.$store
                .dispatch("login", payload)
                .then(res => {})
                .catch(err => {
                    this.loginForm.password = "";
                    this.loginForm.email = "";
                    this.loginForm.errorMessage = err.response.data.data
                        ? err.response.data.data[0].msg
                        : err.response.data.message;
                });
        }
    }
};
</script>
