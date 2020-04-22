<template>
    <div class="profile__page">
        <section class="section-profile">
            <div class="row">
                <div class="col-1-of-2">
                    <div>
                        <h2 class="heading--secondary">Profile</h2>
                        <span class="line line--blue"></span>
                        <p
                            class="paragraph--large"
                        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quo qui in dolorem molestias deleniti nihil labore ullam est, repellat minus, dicta alias minima explicabo nisi? Ipsam accusantium sapiente incidunt!</p>
                        <button @click="signout" class="btn btn--danger">Sign Out</button>
                        <AppEditProfileForm />
                    </div>
                </div>
                <div class="col-1-of-2"></div>
            </div>
        </section>
    </div>
</template>


<script>
import AppEditProfileForm from "@/components/AppEditProfileForm.vue";

export default {
    components: {
        AppEditProfileForm
    },
    beforeRouteEnter(to, from, next) {
        if (localStorage.getItem("token") == null) {
            next({
                name: "Login"
            });
        } else next();
    },
    methods: {
        signout() {
            this.$store.commit("signout");
        }
    }
};
</script>