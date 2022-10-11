import store from '../store'

export default async (to:any, from:any, next:any) => {

  // const user = store.getters['User/users'];
  // const http = axios.create({ baseURL: process.env.VUE_APP_SERVER });
  // http.interceptors.request.use(
  //   (config) => {
  //     if (token) config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   (error) => Promise.reject(error)
  // );

  const token = localStorage["access_token"]
  ? localStorage.getItem("access_token")
  : null;

  if (to.matched.some((record:any) => record.meta.requiresAuth)) {
    try {
      if (!token) throw "token não informado";
      const user:any = await store.dispatch("User/ActionSetMe");
      if (user) next();
    } catch (error:any) {
      error.response ? console.log(error.response.data) : console.log(error);
      next({ name: "SignIn" });
    }
  } else {
    try {
      if (!token) throw "token não informado";
      const user:any = await store.dispatch("User/ActionSetMe"); 
      if(user) next({ name: "Dashboard" });
      next({ name: "SignIn" });
    } catch (error:any) {
      error.response ? console.log(error.response.data) : console.log(error);
      await store.dispatch("User/ActionSetMe", null);
      next();
    }
  }
};