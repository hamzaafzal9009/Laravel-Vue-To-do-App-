<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow py-3">
                <div class="row border-bottom">
                    <div class="col-md-6">
                        <h3 class="text-muted p-3 pt-0">Todo List</h3>
                    </div>
                    <div class="col-md-6">
                        <input
                            type="text"
                            placeholder="Type to Search..."
                            v-model="search"
                            class="form-control"
                        />
                    </div>
                </div>

                <div class="m-3">
                    <add-task />
                </div>

                <div class="m-3">
                    <ul class="list-group">
                        <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span>Tasks</span>
                            <span>Action</span>
                        </li>
                        <Task
                            v-for="task in filteredTasks"
                            :key="task.id"
                            :task="task"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
export default {
    components: {
        Task,
        AddTask,
    },
    data() {
        return {
            search: "",
            tasks: "",
            user: null,
        };
    },
    created() {
        this.getTasks();
        this.$root.$on("updateTask", (task) => {
            this.updateTask(task);
        });
        this.$root.$on("deleteTask", (id) => {
            this.deleteTask(id);
        });

        this.$root.$on("addTask", (name) => {
            this.addTask(name);
        });
        this.user = this.$store.state.user.user;
    },
    computed: {
        filteredTasks() {
            return Object.values(this.tasks).filter((task) => {
                return task.name
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
            });
        },
    },
    methods: {
        async getTasks() {
            await axios
                .get("/api/tasks")
                .then((res) => {
                    this.tasks = res.data;
                })
                .catch((err) => {
                    console.dir(err);
                });
        },
        async updateTask(task) {
            await axios
                .post(`/api/tasks/update/${task.id}`, task)
                .then((res) => {
                    console.log(res);
                    this.$toast.success("Task Updated");
                    this.$root.$emit("taskUpdated", task);
                })
                .catch((err) => {
                    console.dir(err);
                });
        },
        async deleteTask(id) {
            console.log("deleteTask");
            await axios
                .delete(`/api/tasks/delete/${id}`)
                .then((res) => {
                    if (res.status == 200) {
                        this.getTasks();
                        this.$toast.success("Task Deleted");
                        this.$root.$emit("taskUpdated", task);
                    }
                })
                .catch((err) => {
                    console.dir(err);
                });
        },
        async addTask(name) {
            let data = {
                name: name,
                author: this.user.name,
                status: 0,
            };
            await axios
                .post(`/api/tasks/add`, data)
                .then((res) => {
                    this.$toast.success("Task Added");
                    this.getTasks();
                })
                .catch((err) => {
                    console.dir(err);
                });
        },
    },
};
</script>
