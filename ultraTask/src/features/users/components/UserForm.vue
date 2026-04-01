<script setup lang="ts">
import { reactive } from 'vue';
import { useUserStore } from '../../../store/useUserStore';

const userStore = useUserStore();

const formData = reactive({
  name: '',
  email: '',
  city: '',
});

const handleSubmit = async () => {
  if(formData.name && formData.email){
    await userStore.addUser({
      name: formData.name,
      email: formData.email,
      username: formData.name.toLowerCase().replace(/\s/g, ''),
      address: {
        street: '',
        suite: '',
        city: formData.city,
        zipcode: '',
      },
    });

    formData.name = '';
    formData.email = '';
    formData.city = '';
    alert('User added successfully');
  } else {
    alert("Please fill in all fields")
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Add New User</h3>
    
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          placeholder="Beka Aruzhanov"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          placeholder="beka@example.com"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
        <input
          v-model="formData.city"
          type="text"
          id="city"
          placeholder="Almaty"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>

    <div class="mt-4">
      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        Create User
      </button>
    </div>
  </form>
</template>