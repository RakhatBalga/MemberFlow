<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            ultraTask
          </RouterLink>
        </div>
        <nav class="flex space-x-4">
          <RouterLink 
            to="/" 
            class="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
          >
            Users
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
