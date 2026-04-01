import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { User, CreateUserDto } from '../features/users/types';
import { usersApi } from '../api/users';

export const useUserStore = defineStore('users', () => {
    const users = ref<User[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    
    const searchQuery = ref(''); // users search

    const filteredUsers = computed(() => {
        if (!searchQuery.value) return users.value;
        return users.value.filter(u =>
            u.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    const fetchUsers = async () => {
        loading.value = true;
        try{
            const response = await usersApi.getUsers(); //request 
            users.value = response.data; //saving
        }
        catch (err) {
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

    const removeUser = async ( id: number ) => {
        try {
            await usersApi.deleteUser(id);
            users.value = users.value.filter(u => u.id !== id);
        } catch (err) {
            console.error("Failed to delete user", err);
        }
    };

    return {
        users, 
        searchQuery,
        filteredUsers,
        loading,
        error, 
        fetchUsers, 
        addUser,
        removeUser
    };
});