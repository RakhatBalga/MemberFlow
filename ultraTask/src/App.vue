<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow p-8 max-w-[1200px] mx-auto w-full">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
