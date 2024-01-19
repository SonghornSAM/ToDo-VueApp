import { createApp } from 'vue';
//import './assets/style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // Import Element Plus styles
import App from './App.vue';
import ToDoList from './components/ToDoList.vue'

const app = createApp(App);
app.use(ElementPlus);
app.component('todo-item', ToDoList);
app.mount('#app');
