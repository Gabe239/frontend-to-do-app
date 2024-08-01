<template>
  <div class="container mt-5">
    <button class="btn btn-primary align-items-center" @click="addTask()" type="button">
      Add a task +
      <svg class="bi ms-1" width="40" height="20">
        <use xlink:href="#arrow-right-short"></use>
      </svg>
    </button>
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
          <tr v-for="task in paginatedTasks" :key="task.id">
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
                <button class="btn btn-primary" @click="editTask(task.id)">Edit</button>
                <button class="btn btn-success" @click="markAsFinished(task.id)" v-if="!task.status">Finish</button>
                <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)">Previous</button>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="changePage(currentPage + 1)">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TaskList',
  data() {
    return {
      tasks: [],
      currentPage: 1,
      tasksPerPage: 6,
    };
  },
  computed: {
    sortedTasks() {
      return [...this.tasks].sort((a, b) => a.status - b.status);
    },
    totalPages() {
      return Math.ceil(this.tasks.length / this.tasksPerPage);
    },
    paginatedTasks() {
      const start = (this.currentPage - 1) * this.tasksPerPage;
      const end = start + this.tasksPerPage;
      return this.sortedTasks.slice(start, end);
    },
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/task`);
        this.tasks = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`${process.env.VUE_APP_API_URL}/task/${id}`);
        this.fetchTasks();
      } catch (error) {
        console.error(error);
      }
    },
    async markAsFinished(id) {
      try {
        await axios.put(`${process.env.VUE_APP_API_URL}/task/${id}`, { status: true });
        this.fetchTasks();
      } catch (error) {
        console.error(error);
      }
    },
    editTask(id) {
      this.$router.push(`/edit/${id}`);
    },
    addTask() {
      this.$router.push(`/add`);
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px; 
}

.table {
  margin-top: 20px;
}

.badge {
  padding: 0.5em;
}

.pagination {
  margin-top: 20px;
}

.btn-group .btn {
  margin-right: 5px;
}
</style>
