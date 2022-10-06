// ! Use this file to configure your axios plugin to use it inside your Vue app components
// ! Im this case we are using the axios inside a service file to make requests to the API so we dont need it here

////
//  # INSTRUCTIONS To use inside a component:

// First import the service file in main.ts:
  // import api from "./plugins/axios";
  // createApp(App)
    // .use(api)

// inside a component:
  // import { inject } from 'vue';
  // const api = inject('api');
  // const testeApi = async () => {
  //   const { data } = await api.get('v2/');
  //   console.log(data);
  // }

////


// import axios from "axios";
// import type {App} from 'vue'
// import { provide } from "vue";


// export default {
//   install: (app: App) => {
//     const api = axios.create({
//       baseURL: `https://pokeapi.co/api/`,
//       // headers: {
//       //     "Content-type": "application/json",
//       //     "Access-Control-Allow-Origin": "*",
//       //   },
//       // validateStatus: () => true,
//     });

//     app.config.globalProperties.$api = api;
//     app.config.globalProperties.$api.interceptors.request.use(
//       (request:any) => {
//         const token = localStorage.getItem("token");
//         if (token) request.headers.Authorization = `Bearer ${token}`;
//         console.log("🚀 ~ file: axios.ts ~ line 59 ~ request", request);
//         return request;
//       },
//       (error:any) => Promise.reject(error)
//     );
//     app.config.globalProperties.$api.interceptors.response.use(
//       (response:any) => response,
//       (error:any) => Promise.reject(error)
//     );

//     app.provide("api", api);
//   }
// };