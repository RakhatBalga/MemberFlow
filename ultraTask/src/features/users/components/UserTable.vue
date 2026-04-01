<script setup lang="ts">
import type { User } from '../types';
import { useUserStore } from '../../../store/useUserStore';

defineProps<{
  users: User[]
}>();

const userStore = useUserStore();

const handleDelete = (id: number) => {
  if (confirm('Are you sure to delete that??')) {
    userStore.removeUser(id);
  }
};
</script>

<template>
  <div class="mt-6 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
    <table v-if="users.length" class="min-w-full divide-y divide-gray-200 bg-white">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
          <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50 transition-colors">
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ user.id }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {{ user.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ user.email }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ user.address?.city || 'N/A' }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button 
              @click="handleDelete(user.id)" 
              class="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded-md transition-colors"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div v-else class="p-8 text-center text-gray-500 bg-white">
      No users found.
    </div>
  </div>
</template>