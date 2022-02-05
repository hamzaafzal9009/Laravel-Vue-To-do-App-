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

                <div class="d-flex m-3"></div>

                <div class="m-3">
                    <ul class="list-group">
                        <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span>Tasks</span>
                            <span>Action</span>
                        </li>
                        <Todo
                            v-for="task in tasks"
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
import Todo from "./Todo";
export default {
    components: {
        Todo,
    },
    data() {
        return {
            search: "",
            tasks: "",
        };
    },
    created() {
        this.getTasks();
    },
    methods: {
        async getTasks() {
            await axios
                .get("/api/tasks")
                .then((res) => {
                    console.log(res);
                    this.tasks = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
