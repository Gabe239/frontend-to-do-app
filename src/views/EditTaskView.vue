<template>
  <section class="vh-100" style="background-color: #eee;">

    <div class="row d-flex h-100">
      
      <EditTask />

    </div>

  </section>
</template>

<script>
import EditTask from '../components/EditTask.vue';

export default {
  name: 'EditTaskView',
  components: {
    EditTask
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>