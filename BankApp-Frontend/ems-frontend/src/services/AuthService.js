import axios from "axios"


const AUTH_REST_API_BASE_URL = 'http://localhost:8081/api/auth';


// export function registerAPICall(registerObj) {
//     return axios.post(AUTH_REST_API_BASE_URL + 'register', registerObj);
// }

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);

export const createAPIAddress = (address) => axios.post(AUTH_REST_API_BASE_URL, address);

export const loginAPICall = (loginObj) => axios.post(AUTH_REST_API_BASE_URL + '/login', loginObj);