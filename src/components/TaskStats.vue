<template>
  <div>
    <p>Completed Tasks: {{ completedCount }}</p>
    <p>Pending Tasks: {{ pendingCount }}</p>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/taskStore';
import { computed } from 'vue';

export default {
  setup() {
    const taskStore = useTaskStore();
    
  
    const completedCount = computed(() => taskStore.completedTasksCount.value);
    const pendingCount = computed(() => taskStore.pendingTasksCount.value);

    return { completedCount, pendingCount };
  }
};
</script>
