import axios from "axios"
import { getToken } from "./AuthService";
//import { getToken } from '../services/AuthService';

const USER_REST_API_BASE_URL = 'http://localhost:8081/api/users';


axios.interceptors.request.use(function (config) {
 
    // add token in the header
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


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