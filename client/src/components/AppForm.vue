<template>
    <div
        class="container__form"
        :class="{ 'container__form--sign-up': loginFormType }"
    >
        <div class="logo__container">
            <img src="../assets/logo.png" alt="Logo" class="logo__img" />
        </div>
        <transition name="fade">
            <div
                v-if="loginFormType"
                class="forms--login"
                @submit.prevent="login()"
            >
                <form class="form">
                    <h2 class="heading--secondary">Login</h2>
                    <span class="line line--blue"></span>
                    <div class="form__group">
                        <input
                            v-model="email"
                            type="email"
                            id="email"
                            class="form__input"
                            placeholder="Email"
                            required
                        />
                        <label for="email" class="form__label">Email</label>
                        <i class="icon-email"></i>
                    </div>
                    <div class="form__group">
                        <input
                            v-model="password"
                            type="password"
                            id="password"
                            class="form__input"
                            placeholder="Password"
                            required
                        />
                        <label for="password" class="form__label"
                            >Password</label
                        >
                        <i class="icon-lock"></i>
                    </div>
                    <button type="submit" class="btn btn--warning">
                        Login
                    </button>
                </form>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="!loginFormType" class="forms--sign-up">
                <form class="form" @submit.prevent="signUp">
                    <h2 class="heading--secondary">Sign Up</h2>
                    <span class="line line--blue"></span>
                    <div class="form__group">
                        <input
                            v-model="name"
                            type="text"
                            id="name"
                            class="form__input"
                            placeholder="Name"
                            required
                        />
                        <label for="name" class="form__label">Name</label>
                        <i class="icon-user"></i>
                    </div>
                    <div class="form__group">
                        <input
                            v-model="email"
                            type="email"
                            id="email"
                            class="form__input"
                            placeholder="Email"
                            required
                        />
                        <label for="email" class="form__label">Email</label>
                        <i class="icon-email"></i>
                    </div>
                    <div class="form__group">
                        <input
                            v-model="password"
                            type="password"
                            id="password"
                            class="form__input"
                            placeholder="Password"
                            required
                        />
                        <label for="password" class="form__label"
                            >Password</label
                        >
                        <i class="icon-lock"></i>
                    </div>
                    <button type="submit" class="btn btn--warning">
                        Sign Up
                    </button>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import Api from '@/api'

export default {
    props: {
        loginFormType: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    watch: {
        loginFormType() {
            this.password = ''
        },
    },
    methods: {
        signUp() {
            const payload = {
                name: this.name,
                email: this.email,
                password: this.password,
            }
            Api()
                .post('signup', payload)
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        login() {
            const payload = {
                email: this.email,
                password: this.password,
            }
            Api()
                .post('login', payload)
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
}
</script>
