import axios from 'axios';
import type { User, CreateUserDto } from '../features/users/types';

const API_URL = "https://jsonplaceholder.typicode.com";

export const usersApi = {
  getUsers: () => axios.get<User[]>(`${API_URL}/users`),
  
  createUser: (user: CreateUserDto) => axios.post<User>(`${API_URL}/users`, user),
  
  deleteUser: (id: number) => axios.delete(`${API_URL}/users/${id}`)
};