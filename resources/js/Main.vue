<template>
    <div class="bg-light main">
        <div class="text-center text-secondary m-5">
            <h3>To Do App - Laravel & Vue JS</h3>
        </div>
        <div>
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container-fluid justify-content-center">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link
                                v-if="isLogged"
                                class="nav-link active"
                                to="/"
                            >
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                v-if="!isLogged"
                                class="nav-link"
                                to="/login"
                            >
                                Login
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                v-if="!isLogged"
                                class="nav-link"
                                to="/register"
                            >
                                Register
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <span
                                v-if="isLogged"
                                class="nav-link cursor-pointer"
                                @click="logout()"
                            >
                                Logout
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div class="container m-5">
            <!-- Dynamic view based on routing system here -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["isLogged"]),
    },

    methods: {
        logout() {
            this.$store.dispatch("logout");
        },
    },
};
</script>

<style scoped>
.bg-light.main {
    min-height: 100vh;
    min-width: 100vw;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
