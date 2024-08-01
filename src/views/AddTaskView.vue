<template>
  <section class="vh-100" style="background-color: #eee;">

    <div class="row d-flex h-100">
      <div class="container mt-5">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="card-title">Add New Task</h3>
            <AddTask />
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import AddTask from '../components/AddTask.vue';

export default {
  name: 'AddTaskView',
  components: {
    AddTask
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
.card {
  border-radius: 10px;
}
.card-title {
  font-size: 1.5em;
  margin-bottom: 1em;
}
</style>