<template>
    <div>
      <select v-model="selectedCategory">
        <option value="">All categories</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
  
      <select v-model="selectedStatus">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  </template>
  
  <script>
  import { useTaskStore } from '@/stores/taskStore';
  import { ref, watch } from 'vue';
  
  export default {
    setup() {
      const taskStore = useTaskStore();
      const selectedCategory = ref('');
      const selectedStatus = ref('all');
  
      watch([selectedCategory, selectedStatus], () => {
      });
  
      return { selectedCategory, selectedStatus };
    }
  };
  </script>
  