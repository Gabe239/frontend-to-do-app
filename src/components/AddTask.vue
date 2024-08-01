<template>
  
        <form @submit.prevent="addTask">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input v-model="title" type="text" class="form-control" id="title" placeholder="Enter task title" required />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="description" class="form-control" id="description" rows="3" placeholder="Enter task description" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Add Task</button>
        </form>
      
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddTask',
  data() {
    return {
      title: '',
      description: ''
    };
  },
  methods: {
    async addTask() {
      try {
        await axios.post(`${process.env.VUE_APP_API_URL}/task/`, {
          title: this.title,
          description: this.description,
          status: false
        });
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
</style>
