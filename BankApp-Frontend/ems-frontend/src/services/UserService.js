import axios from "axios"

const USER_REST_API_BASE_URL = 'http://localhost:8081/api/users';

export const getAllUsers = () => axios.get(USER_REST_API_BASE_URL);

export const createUser = (user) => axios.post(USER_REST_API_BASE_URL, user);

export const getUserById = (userId) => axios.get(USER_REST_API_BASE_URL + '/' + userId)

export const updateUser = (userId, user) => axios.put(USER_REST_API_BASE_URL + '/' + userId, user,
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }
);

export const deleteUser = (userId) => axios.delete(USER_REST_API_BASE_URL + '/' + userId);