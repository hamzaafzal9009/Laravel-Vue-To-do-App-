<template>
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>{{ task.name }}</span>
        <div>
            <span class="badge bg-primary cursor-pointer"> Edit </span>
            <span class="badge bg-success cursor-pointer"> Update </span>
            <span class="badge bg-danger cursor-pointer"> Delete </span>
        </div>
    </li>
</template>
<script>
export default {
    props: ["task"],
    created() {
        console.log(this.task);
    },
};
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>
