<template>
    <div class="container__form" :class="{ 'container__form--sign-up': login }">
        <div class="logo__container">
            <img src="../assets/logo.png" alt="Logo" class="logo__img" />
        </div>
        <transition name="fade">
            <div v-if="login" class="forms--login">
                <form class="form">
                    <h2 class="heading--secondary">Login</h2>
                    <span class="line line--blue"></span>
                    <div class="form__group">
                        <input
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
                    <button class="btn btn--warning">Login</button>
                </form>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="!login" class="forms--sign-up">
                <form class="form">
                    <h2 class="heading--secondary">Sign Up</h2>
                    <span class="line line--blue"></span>
                    <div class="form__group">
                        <input
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
                    <button class="btn btn--warning">Sign Up</button>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        login: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
