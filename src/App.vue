<template>
    <div id="app">
      <h1>Lista de Tarefas Avançada</h1>
    
      <TaskFilter />

      <TaskForm />
  
      <TaskList />
        
      <TaskStats />
    </div>
  </template>
  
  <script>
  import TaskList from './components/TaskList.vue';
  import TaskForm from './components/TaskForm.vue';
  import TaskFilter from './components/TaskFilter.vue';
  import TaskStats from './components/TaskStats.vue';
  
  
  export default {
    components: {
      TaskList,
      TaskForm,
      TaskFilter,
      TaskStats,
    },
  };
  </script>
  