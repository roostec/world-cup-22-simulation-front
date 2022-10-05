import axios from "axios";
import type {App} from 'vue'

export default {
  install: (app:App) => {
    app.config.globalProperties.$axios = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1/",
    });
    app.config.globalProperties.$axios.interceptors.request.use(
      (config:any) => {
        const token = localStorage.getItem("token");
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error:any) => Promise.reject(error)
    );
    app.config.globalProperties.$axios.interceptors.response.use(
      (response:any) => response,
      (error:any) => Promise.reject(error)
    );
  },
};