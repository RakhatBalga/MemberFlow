import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User, CreateUserDto } from '../types';
import { usersApi } from '../../../api/users';

export const useUserStore = defineStore('users', () => {
    const users = ref<User[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchUsers = async () => {
        loading.value = true;
        try {
            const response = await usersApi.getUsers();
            users.value = response.data;
        } catch (err) {
            error.value = 'Failed to load users';
        } finally {
            loading.value = false;
        }
    };

    const addUser = async (userData: CreateUserDto) => {
        try {
            const response = await usersApi.createUser(userData);
            users.value.push(response.data);
        } catch (err) {
            console.error("Failed to add user", err);
        }
    };

    const removeUser = async (id: number) => {
        try {
            await usersApi.deleteUser(id);
            users.value = users.value.filter(u => u.id !== id);
        } catch (err) {
            console.error("Failed to delete user", err);
        }
    };

    return {
        users,
        loading,
        error,
        fetchUsers,
        addUser,
        removeUser
    };
});