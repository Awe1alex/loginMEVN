import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    },
    {
        path: '*',
        redirect: {
            name: 'Login',
        },
    },
]

const router = new VueRouter({
    routes,
})

export default router
