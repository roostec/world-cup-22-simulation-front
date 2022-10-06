// import axios, {AxiosInstance} from "axios";
import {AxiosInstance} from "axios";

// export const $axios = axios.create({
//   baseURL: `https://pokeapi.co/api/`,
// })

// $axios.interceptors.request.use(
//   (request:any) => {
//     const token = localStorage.getItem("token");
//     if (token) request.headers.Authorization = `Bearer ${token}`;
//     request.headers.Authorization = `Bearer lkjhk7987kjhkjh`;
//     console.log("🚀 ~ file: axios.ts ~ line 59 ~ request", request);
//     return request;
//   },
//   (error:any) => Promise.reject(error)
// );
// $axios.interceptors.response.use(
//   (response:any) => response,
//   (error:any) => Promise.reject(error)
// );

import $axios from "../interceptors";

export default {
  async getAll() {
    const { data } = await $axios.get<AxiosInstance>('v2/');
    console.log("🚀 ~ file: index.ts ~ line 12 ~ getAll ~ data", data)
    return data;
  }
}