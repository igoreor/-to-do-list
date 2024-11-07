<template>
    <div class="task-item" :class="{ 'completed-task': task.completed }">
      <input type="checkbox" class="task-checkbox" v-model="task.completed" @change="toggleStatus(task.id)" />
      <span class="task-title">{{ task.title }}</span>
      <button @click="editTask(task.id)">Edit</button>
      <button @click="removeTask(task.id)">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: Object
    },
    emits: ['toggle', 'edit', 'remove'],
    methods: {
      toggleStatus(id) {
        this.$emit('toggle', id);
      },
      editTask(id) {
        this.$emit('edit', id);
      },
      removeTask(id) {
        this.$emit('remove', id);
      }
    }
  };
  </script>
  
  <style scoped>
  .task-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .task-checkbox {
   
    margin-top: 20px; 
  }
  
  .task-title {
    flex: 1;
    margin-right: 10px;
  }
  
  button {
    margin-right: 5px;
  }
  
  .completed-task {
    text-decoration: line-through;
  }
  </style>
  