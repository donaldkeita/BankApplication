import axios from "axios"


const AUTH_REST_API_BASE_URL = 'http://localhost:8081/api/auth';


// export function registerAPICall(registerObj) {
//     return axios.post(AUTH_REST_API_BASE_URL + 'register', registerObj);
// }

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);

export const createAPIAddress = (address) => axios.post(AUTH_REST_API_BASE_URL, address);

export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', {usernameOrEmail, password});

// Store token in localStorage
export const storeToken = (token) => localStorage.setItem("token", token);

// Get token from localStorage
export const getToken = () => localStorage.getItem("token");