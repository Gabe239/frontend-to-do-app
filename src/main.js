import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);

app.use(BootstrapVue);
app.use(IconsPlugin);
app.use(router);

app.mount('#app');
