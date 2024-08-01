import { createRouter, createWebHistory } from 'vue-router';
import TaskListView from '../views/TaskListView.vue';
import AddTaskView from '../views/AddTaskView.vue';
import EditTaskView from '../views/EditTaskView.vue';

const routes = [
  { path: '/', component: TaskListView },
  { path: '/add', component: AddTaskView },
  { path: '/edit/:id', component: EditTaskView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
