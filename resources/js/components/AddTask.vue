<template>
    <div class="d-flex">
        <div class="col-md-10">
            <input
                type="text"
                class="form-control"
                :class="error ? 'is-invalid' : ''"
                placeholder="Add Todo..."
                v-model="name"
            />
        </div>
        <button class="btn btn-outline-primary mx-4" @click="addTask">
            Add Todo
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "",
            error: false,
        };
    },

    methods: {
        addTask() {
            if (this.name.length > 0) {
                this.$root.$emit("addTask", this.name);
                this.error = false;
            } else {
                this.error = true;
            }
        },
    },
};
</script>
