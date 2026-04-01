<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/useUserStore';
import UserTable from '../features/users/components/UserTable.vue';
import UserFilter from '../features/users/components/UserFilter.vue';
import UserForm from '../features/users/components/UserForm.vue';
import Loader from '../components/ui/Loader.vue';

const userStore = useUserStore();
const showForm = ref(false);

onMounted(() => {
  userStore.fetchUsers();
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      
      <div class="md:flex md:items-center md:justify-between mb-8">
        <div class="flex-1 min-w-0">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            User Management System
          </h2>
          <p class="mt-1 text-sm text-gray-500">
            Manage your team members and their account details.
          </p>
        </div>
        <div class="mt-4 flex md:ml-4 md:mt-0">
          <button 
            @click="showForm = !showForm"
            type="button" 
            class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            {{ showForm ? 'Cancel' : 'Add User' }}
          </button>
        </div>
      </div>

      <UserForm v-if="showForm" />

      <div class="bg-white p-4 rounded-lg shadow-sm mb-6">
        <UserFilter />
      </div>

      <div class="relative">
        <div v-if="userStore.loading" class="flex justify-center items-center py-20">
          <Loader />
        </div>

        <div v-else-if="userStore.error" class="rounded-md bg-red-50 p-4 border border-red-200">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">Error loading data</h3>
              <div class="mt-2 text-sm text-red-700">
                <p>{{ userStore.error }}</p>
              </div>
              <div class="mt-4">
                <button @click="userStore.fetchUsers()" class="text-sm font-medium text-red-800 hover:text-red-600">
                  Try again &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <UserTable :users="userStore.filteredUsers" />
        </div>
      </div>

    </div>
  </div>
</template>