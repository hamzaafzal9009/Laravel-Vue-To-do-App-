import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../Pages/Login.vue";
import Home from "../Pages/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/",
        name: "home",
        meta: {
            auth: true,
        },
        component: Home,
    },
];
const router = new VueRouter({
    mode: "history",
    base: '/',
    routes,
});
router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("user");

    if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
        next("/login");
        return;
    }
    next();
});

export default router;
