import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const authClient = axios.create({
    baseURL: process.env.MIX_API_URL,
});

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData;
            localStorage.setItem("user", JSON.stringify(userData));
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
        },

        clearUserData() {
            localStorage.removeItem("user");
            location.reload();
        },
    },
    actions: {
        login({ commit }, credentials) {
            console.log(credentials);
            return authClient
                .post("/login", credentials)
                .then(({ data }) => {
                    console.log(data);
                    commit("setUserData", data);
                })
                .catch((error) => {
                    console.dir(error);
                });
        },
        register({ commit }, credentials) {
            console.log(credentials);
            return authClient
                .post("/register", credentials)
                .then(({ data }) => {
                    console.log(data);
                    // commit("setUserData", data);
                })
                .catch((error) => {
                    console.dir(error);
                });
        },

        logout({ commit }) {
            commit("clearUserData");
        },
    },

    getters: {
        isLogged: (state) => !!state.user,
    },
});
