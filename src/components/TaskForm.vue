<template>
    <form @submit.prevent="handleSubmit">
      <input v-model="title" placeholder="Task title" />
      <button type="submit">{{ editing ? 'Edit' : 'Add' }} Task</button>
    </form>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { useTaskStore } from '@/stores/taskStore';
  
  export default {
    props: {
      editingTask: Object
    },
    setup(props) {
      const taskStore = useTaskStore();
      const title = ref(props.editingTask?.title || '');
  
      const handleSubmit = () => {
        if (props.editingTask) {
          taskStore.editTask(props.editingTask.id, { title: title.value });
        } else {
          taskStore.addTask({ id: Date.now(), title: title.value });
        }
        title.value = '';
      };
  
      watch(() => props.editingTask, (newTask) => {
        if (newTask) {
          title.value = newTask.title;
        }
      });
  
      return { title, handleSubmit };
    }
  };
  </script>
  