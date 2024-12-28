import axios from "axios"
import { getToken } from "./AuthService";
//import { getToken } from '../services/AuthService';

const ADDRESS_REST_API_BASE_URL = 'http://localhost:8081/api/addresses';


axios.interceptors.request.use(function (config) {
 
    // add token in the header
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


export const listAddresses = () => axios.get(ADDRESS_REST_API_BASE_URL);

export const createAddress = (address) => axios.post(ADDRESS_REST_API_BASE_URL, address);

export const getAddress = (addressId) => axios.get(ADDRESS_REST_API_BASE_URL + '/' + addressId);

export const updateAddress = (addressId, address) => axios.put(ADDRESS_REST_API_BASE_URL + '/' + addressId, address);

export const deleteAddress = (addressId) => axios.delete(ADDRESS_REST_API_BASE_URL + '/' + addressId);

// export const listAddresses = () => {
//     return axios.get(REST_API_BASE_URL);
// }

