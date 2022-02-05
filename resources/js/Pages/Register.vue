<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow p-3">
                <h3 class="text-center pb-0 mb-0 text-secondary">Welcome</h3>
                <p class="text-center text-secondary">
                    Please Register Your Account
                </p>
                <hr />
                <div class="row justify-content-center">
                    <div class="col-md-8 col-10">
                        <form @submit.prevent="register">
                            <div class="m-3">
                                <label for="name">Name: </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    v-model="name"
                                    class="form-control"
                                    placeholder="Name ..."
                                    required
                                />
                            </div>
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
                                    Register
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
            name: "",
            email: "",
            password: "",
        };
    },

    methods: {
        register() {
            this.$store
                .dispatch("register", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    this.$toast(
                        "Registered Successful! Please Login to use our services!"
                    );
                    this.$router.push({ name: "login" });
                });
        },
    },
};
</script>
