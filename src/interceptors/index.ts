import axios from "axios";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL || `https://app-pool-v1.herokuapp.com/api/v1/`,
})

$axios.interceptors.request.use(
  (request:any) => {
    const token = localStorage.getItem("access_token");
    if (token) request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  (error:any) => Promise.reject(error)
);
$axios.interceptors.response.use(
  (response:any) => response,
  (error:any) => Promise.reject(error)
);

export default $axios;