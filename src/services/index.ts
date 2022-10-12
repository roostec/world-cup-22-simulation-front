// import axios, {AxiosInstance} from "axios";
import axios, { AxiosInstance } from "axios";
import { Loading } from 'quasar';

import UseNotify from '../composables/UseNotify';
const {notify} = UseNotify();

// const $q = useQuasar();

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
    return data;
  },

  async login( email: string, password: string ) {        
    try {
      if (!email) throw "email empty";
      if (!password) throw "password empty";

      Loading.show();
      const { data, status } = await $axios.post<AxiosInstance>('accounts/authentication', {email, password});      
      if (status === 201) {
        return {data, status};
      } 
    } catch (error:any) {
      console.log('ERROR: ', error.response);  
      if (error.response.status === 401) notify('negative', 'Erro', 'Usuario ou senha invalidos');
      else notify('negative', 'Erro', 'Erro ao tentar logar, tente mais tarde');        
      return error; 
    } finally {
      Loading.hide();
    }
  },

  async me(notifyMe = false) {        
    try {
      Loading.show();
      const { data, status } = await $axios.get<AxiosInstance>('accounts/me');      
      if (status === 200) return {data, status} 
    } catch (error) {
      console.log('ERROR: ', error);  
      if (notifyMe) notify('negative', 'Erro', 'ME');   
      return error;  
    } finally {
      Loading.hide();
    }
  },

  async ipInfo() {        
    try {
      Loading.show();
      const { data, status } = await axios.get<AxiosInstance>('https://ipinfo.io/json?token=4b83ced3eb45f2');      
      if (status === 200) return {data, status} 
    } catch (error) {
      console.log('ERROR: ', error);  
      // if (notifyMe) notify('negative', 'Erro', 'ME');   
      return error;  
    } finally {
      Loading.hide();
    }
  },

  async preferences(dark_mode: boolean | undefined = undefined, language: string | undefined = undefined) {      
    try {
      Loading.show();
      const params = Object.assign({},
        dark_mode !== undefined ? {dark_mode} : {},
        language !== undefined ? {language} : {}
        );
        
      const { data, status } = await $axios.patch<AxiosInstance>('accounts/preferences', params);      
      // if (status === 200) return {data, status} 
    } catch (error) {
      console.log('ERROR: ', error);  
      // if (notifyMe) notify('negative', 'Erro', 'ME');   
      // return error;  
    } finally {
      Loading.hide();
    }
  }

}