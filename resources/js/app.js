require("./bootstrap");
import "./bootstrap";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

window.onload = function () {
    const app = new Vue({
        el: "#app",
        render: (h) => h(App),
    });
};

export default app;
