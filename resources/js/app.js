require("./bootstrap");
import Vue from "vue";
import Main from "./Main.vue";
import router from "./router";
import store from "./store";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

window.Vue = require("vue").default;
Vue.use(Toast);

const app = new Vue({
    router,
    store,
    render: (h) => h(Main),
    created() {
        const userInfo = localStorage.getItem("user");
        if (userInfo) {
            const userData = JSON.parse(userInfo);
            this.$store.commit("setUserData", userData);
        }
        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response.status === 401) {
                    this.$store.dispatch("logout");
                }
                return Promise.reject(error);
            }
        );
    },
}).$mount("#app");

export default app;
