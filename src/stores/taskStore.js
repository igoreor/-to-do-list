import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const addTask = (task) => {
    if (!tasks.value.some((t) => t.id === task.id)) {
      tasks.value.push({ ...task, completed: false });
    }
  };

  const removeTask = (id) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  const editTask = (id, updatedTask) => {
    const taskIndex = tasks.value.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      tasks.value[taskIndex] = { ...tasks.value[taskIndex], ...updatedTask };
    }
  };

  const toggleTaskStatus = (id) => {
    const task = tasks.value.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  };

  const filteredTasks = computed(() => {
    return tasks.value;
  });

  const completedTasksCount = computed(
    () => tasks.value.filter((task) => task.completed).length
  );
  const pendingTasksCount = computed(
    () => tasks.value.filter((task) => !task.completed).length
  );

  return {
    tasks,
    addTask,
    removeTask,
    editTask,
    toggleTaskStatus,
    filteredTasks,
    completedTasksCount,
    pendingTasksCount,
  };
});
