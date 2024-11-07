<template>
    <div>
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="toggleStatus"
        @edit="editTask"
        @remove="removeTask"
      />
    </div>
  </template>
  
  <script>
  import { useTaskStore } from '@/stores/taskStore';
  import { computed } from 'vue';
  import TaskItem from './TaskItem.vue';
  
  export default {
    components: { TaskItem },
    setup() {
      const taskStore = useTaskStore();
      const filteredTasks = computed(() => taskStore.filteredTasks);
  
      const toggleStatus = (id) => taskStore.toggleTaskStatus(id);
      const editTask = (id, updatedTask) => taskStore.editTask(id, updatedTask);
      const removeTask = (id) => taskStore.removeTask(id);
  
      return { filteredTasks, toggleStatus, editTask, removeTask };
    },
  };
  </script>
  