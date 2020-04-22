<template>
    <div class="container__form container__form--to-right">
        <div class="logo__container">
            <img src="../assets/logo.png" alt="Logo" class="logo__img" />
        </div>
        <div class="forms--sign-up">
            <form class="form" @submit.prevent="editProfile">
                <h2 class="heading--secondary">Edit Profile</h2>
                <span class="line line--blue"></span>
                <transition name="slide">
                    <div
                        v-if="editProfileForm.errorMessage"
                        class="form__error"
                    >{{ editProfileForm.errorMessage }}</div>
                </transition>
                <transition name="slide">
                    <div
                        v-if="!editProfileForm.errorMessage && editProfileForm.successMessage"
                        class="form__success"
                    >{{ editProfileForm.successMessage }}</div>
                </transition>
                <div class="form__group">
                    <input
                        v-model.trim="$v.editProfileForm.name.$model"
                        type="text"
                        id="name"
                        class="form__input"
                        :class="{'form__input--invalid': $v.editProfileForm.name.$invalid && $v.editProfileForm.name.$dirty}"
                        placeholder="Name"
                        required
                    />
                    <label for="name" class="form__label">Name</label>
                    <i class="icon-user"></i>
                </div>
                <div class="form__group">
                    <input
                        v-model.trim="$v.editProfileForm.email.$model"
                        type="email"
                        id="email"
                        class="form__input"
                        :class="{'form__input--invalid': $v.editProfileForm.email.$invalid && $v.editProfileForm.email.$dirty}"
                        placeholder="Email"
                        required
                    />
                    <label for="email" class="form__label">Email</label>
                    <i class="icon-email"></i>
                </div>
                <div class="form__group">
                    <input
                        v-model.trim="$v.editProfileForm.password.$model"
                        type="password"
                        id="password"
                        class="form__input"
                        :class="{'form__input--invalid': $v.editProfileForm.password.$invalid && $v.editProfileForm.password.$dirty}"
                        placeholder="Password"
                        required
                    />
                    <label for="password" class="form__label">Password</label>
                    <i class="icon-lock"></i>
                </div>
                <button
                    :disabled="$v.editProfileForm.name.$invalid || $v.editProfileForm.email.$invalid || $v.editProfileForm.password.$invalid"
                    type="submit"
                    class="btn btn--warning"
                >Edit Profile</button>
            </form>
        </div>
    </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            editProfileForm: {
                name: "",
                email: "",
                password: "",
                errorMessage: false,
                successMessage: false
            }
        };
    },
    validations: {
        editProfileForm: {
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
        }
    },
    methods: {
        editProfile() {
            const payload = {
                name: this.editProfileForm.name,
                email: this.editProfileForm.email,
                password: this.editProfileForm.password
            };
            this.$store
                .dispatch("editProfile", payload)
                .then(res => {
                    this.editProfileForm.errorMessage = false;
                    this.editProfileForm.successMessage = res.data.message;
                })
                .catch(err => {
                    this.editProfileForm.successMessage = false;
                    if (
                        err.response.data.message === "jwt expired" ||
                        err.response.data.message === "invalid token"
                    ) {
                        this.$store.commit("signout");
                    }

                    this.editProfileForm.password = "";
                    this.editProfileForm.email = "";
                    this.editProfileForm.name = "";
                    this.editProfileForm.errorMessage = err.response.data.data
                        ? err.response.data.data[0].msg
                        : err.response.data.message;
                });
        }
    }
};
</script>
