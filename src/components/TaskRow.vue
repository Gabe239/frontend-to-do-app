<template>
    <tr>
      <th scope="row">{{ task.id }}</th>
      <td>{{ task.title }}</td>
      <td>{{ task.description }}</td>
      <td>
        <span :class="{ 'badge bg-success': task.status, 'badge bg-warning': !task.status }">
          {{ task.status ? 'Completed' : 'In progress' }}
        </span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-primary" @click="$emit('edit-task', task.id)">Edit</button>
          <button class="btn btn-success" @click="$emit('mark-as-finished', task.id)" v-if="!task.status">Finish</button>
          <button class="btn btn-danger" @click="$emit('delete-task', task.id)">Delete</button>
        </div>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    name: 'TaskRow',
    props: {
      task: Object
    }
  };
  </script>
  