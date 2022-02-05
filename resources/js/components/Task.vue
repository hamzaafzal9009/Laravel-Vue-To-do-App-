<template>
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <div class="col-md-8">
            <div
                v-if="!isEdit"
                :class="isCompleted ? 'text-decoration-line-through' : ''"
            >
                <input
                    type="checkbox"
                    v-model="checked"
                    @click="changeTaskStatus"
                />
                <span
                    :class="isCompleted ? 'text-danger' : ''"
                    @click="editTask"
                    class="cursor-pointer text-capitalize"
                >
                    {{ task.name }}
                </span>
            </div>
            <div v-else>
                <input type="text" class="form-control" v-model="task.name" />
            </div>
        </div>
        <div>
            <button
                class="btn btn-outline-success cursor-pointer"
                @click="updateTask"
                v-if="isEdit"
            >
                Update
            </button>
            <button
                class="btn btn-outline-danger cursor-pointer"
                @click="removeTask()"
            >
                Delete
            </button>
        </div>
    </li>
</template>
<script>
export default {
    props: ["task"],
    data() {
        return {
            isEdit: false,
            checked: false,
        };
    },
    created() {
        this.$root.$on("taskUpdated", () => {
            this.isEdit = false;
        });
    },
    mounted() {
        this.checked = this.isCompleted;
    },
    computed: {
        isCompleted() {
            return this.task.status == 1 ? true : false;
        },
    },
    methods: {
        editTask() {
            this.isEdit = true;
        },
        changeTaskStatus() {
            this.task.status == 1
                ? (this.task.status = 0)
                : (this.task.status = 1);
            this.updateTask();
        },
        updateTask() {
            this.$root.$emit("updateTask", this.task);
        },
        removeTask() {
            this.$root.$emit("deleteTask", this.task.id);
        },
    },
};
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>
