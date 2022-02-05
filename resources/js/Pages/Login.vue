<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow p-3">
                <h3 class="text-center pb-0 mb-0 text-secondary">
                    Welcome Back
                </h3>
                <p class="text-center text-secondary">
                    Please Login To Continue
                </p>
                <hr />
                <div class="row justify-content-center">
                    <div class="col-md-8 col-10">
                        <form @submit.prevent="login">
                            <div class="m-3">
                                <label for="email">Email Address: </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    v-model="email"
                                    class="form-control"
                                    placeholder="Email Address ..."
                                    required
                                />
                            </div>
                            <div class="m-3">
                                <label for="password">Password: </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    v-model="password"
                                    class="form-control"
                                    placeholder="Password ..."
                                    required
                                />
                            </div>
                            <div class="d-flex justify-content-center m-3">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },

    methods: {
        login() {
            this.$store
                .dispatch("login", {
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    this.$router.push({ name: "home" });
                });
        },
    },
};
</script>
