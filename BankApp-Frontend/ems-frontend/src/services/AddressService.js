import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8081/api/addresses';


export const listAddresses = () => axios.get(REST_API_BASE_URL);

export const createAddress = (address) => axios.post(REST_API_BASE_URL, address);

export const getAddress = (addressId) => axios.get(REST_API_BASE_URL + '/' + addressId);

export const updateAddress = (addressId, address) => axios.put(REST_API_BASE_URL + '/' + addressId, address);

export const deleteAddress = (addressId) => axios.delete(REST_API_BASE_URL + '/' + addressId);

// export const listAddresses = () => {
//     return axios.get(REST_API_BASE_URL);
// }

