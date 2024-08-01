<template>
  <div class="container mt-5">
    <button class="btn btn-primary align-items-center" @click="addTask()" type="button">
      Add a task +
      <svg class="bi ms-1" width="40" height="20">
        <use xlink:href="#arrow-right-short"></use>
      </svg>
    </button>
    <TaskTable :tasks="paginatedTasks" @edit-task="editTask" @delete-task="deleteTask" @mark-as-finished="markAsFinished" />
    <TaskPagination :current-page="currentPage" :total-pages="totalPages" @change-page="changePage" />
  </div>
</template>

<script>
import axios from 'axios';
import TaskTable from './TaskTable.vue';
import TaskPagination from './TaskPagination.vue';

export default {
  name: 'TaskList',
  components: {
    TaskTable,
    TaskPagination,
  },
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
</style>
