import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import axios from 'axios'

const baseURL = `http://localhost:3000`

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authorized: false,
        userId: null,
        loginFormType: true,
    },
    mutations: {
        loginSuccess(state, resData) {
            state.authorized = true
            state.userId = resData.userId
            localStorage.setItem('token', resData.token)
            localStorage.setItem('userId', resData.userId)
            router.replace('/profile')
        },
        loginFail(state, err) {},
        signupSuccess(state, resData) {
            state.loginFormType = true
        },
        signupFail(state, err) {},
        editProfileSuccess(state, resData) {
            console.log(resData)
        },
        editProfileFail(state, err) {
            console.log(err)
        },
        signout(state) {
            state.authorized = false
            state.userId = null
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            router.replace('/')
        },
        toLogin(state) {
            state.loginFormType = true
        },
        toSignup(state) {
            state.loginFormType = false
        },
    },
    actions: {
        login(store, payload) {
            return axios({
                baseURL: baseURL,
                url: '/login',
                method: 'post',
                data: payload,
            })
                .then((res) => {
                    store.commit('loginSuccess', res.data)
                    return Promise.resolve(res)
                })
                .catch((err) => {
                    store.commit('loginFail', err)
                    return Promise.reject(err)
                })
        },
        signup(store, payload) {
            return axios({
                baseURL: baseURL,
                url: '/signup',
                method: 'post',
                data: payload,
            })
                .then((res) => {
                    store.commit('signupSuccess', res.data)
                    return Promise.resolve(res)
                })
                .catch((err) => {
                    store.commit('signupFail', err)
                    return Promise.reject(err)
                })
        },
        editProfile(store, payload) {
            const token = localStorage.getItem('token')
            return axios({
                baseURL: baseURL,
                url: '/user/edit-profile',
                method: 'post',
                data: payload,
                headers: token ? { Authorization: 'Bearer ' + token } : {},
            })
                .then((res) => {
                    store.commit('editProfileSuccess', res.data)
                    return Promise.resolve(res)
                })
                .catch((err) => {
                    store.commit('editProfileFail', err)
                    return Promise.reject(err)
                })
        },
    },
})
