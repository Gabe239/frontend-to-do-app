<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h2>Edit Task</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="updateTask">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input v-model="title" type="text" class="form-control" id="title" placeholder="Enter task title" />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="description" class="form-control" id="description" rows="3"
              placeholder="Enter task description"></textarea>
          </div>
          <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded">
            <label class="form-check-label me-2" for="status">Completed</label>
           
            <input v-model="status" type="checkbox" class="form-check-input" id="status" />
          </li>
          <button type="submit" class="btn btn-primary">Update Task</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EditTask',
  data() {
    return {
      title: '',
      description: '',
      status: false
    };
  },
  created() {
    this.fetchTask();
  },
  methods: {
    async fetchTask() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/task/${this.$route.params.id}`);
        const task = response.data;
        this.title = task.title;
        this.description = task.description;
        this.status = task.status;
      } catch (error) {
        console.error(error);
      }
    },
    async updateTask() {
      try {
        await axios.put(`${process.env.VUE_APP_API_URL}/task/${this.$route.params.id}`, {
          title: this.title,
          description: this.description,
          status: this.status
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
.container {
  max-width: 600px;
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #007bff;
  color: #fff;
}
</style>
