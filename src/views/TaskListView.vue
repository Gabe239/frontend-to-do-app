<template>
  <section class="vh-100" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">
            <h1 class="text-center my-3 pb-3">To Do App</h1>
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import TaskList from '../components/TaskList.vue';

export default {
  name: 'TaskListView',
  components: {
    TaskList
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>