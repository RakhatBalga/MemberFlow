<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}>();
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      variant === 'danger'
        ? 'border-transparent text-white bg-red-600 hover:bg-red-700 focus:ring-red-500'
        : variant === 'secondary'
          ? 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500'
          : 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]"
  >
    <slot />
  </button>
</template>
