<template>
    <div class="p-4 bg-white rounded shadow">
      <h2 class="text-xl font-semibold mb-4">Create New ToDo Item</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Title:</label>
          <input v-model="newToDo.title" type="text" class="mt-1 p-2 w-full border rounded-md">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Description:</label>
          <textarea v-model="newToDo.description" class="mt-1 p-2 w-full border rounded-md"></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white p-2 rounded-md">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    // ... your existing script
  };
  </script>
  
  <style scoped>
  /* You can add scoped styles specific to this component */
  </style>
  