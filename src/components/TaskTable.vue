<template>
    <div class="table-responsive mt-4">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <TaskRow 
            v-for="task in tasks" 
            :key="task.id" 
            :task="task" 
            @edit-task="$emit('edit-task', task.id)" 
            @delete-task="$emit('delete-task', task.id)" 
            @mark-as-finished="$emit('mark-as-finished', task.id)" 
          />
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import TaskRow from './TaskRow.vue';
  
  export default {
    name: 'TaskTable',
    components: {
      TaskRow,
    },
    props: {
      tasks: Array
    }
  };
  </script>
  