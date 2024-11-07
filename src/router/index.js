// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";

const routes = [
  { path: "/", component: TaskList }, // Rota para lista de tarefas
  { path: "/add-task", component: TaskForm }, // Rota para adicionar uma tarefa
  // Adicione outras rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
