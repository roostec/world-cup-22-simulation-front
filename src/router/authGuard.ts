import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();
// const schoolName: string = store.getters['siteConfigModule/getSchoolName'];

export default async (to:any, from:any, next:any) => {
  // const token = localStorage["agendaih_token"]
  //   ? localStorage.getItem("agendaih_token")
  //   : null;
  // const http = axios.create({ baseURL: process.env.VUE_APP_SERVER });
  // http.interceptors.request.use(
  //   (config) => {
  //     if (token) config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   (error) => Promise.reject(error)
  // );

  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   store.dispatch("ActionSetLoading", true);
  //   try {
  //     if (!token) throw "token não informado";
  //     const { status, data: user } = await http.get("account/me");
  //     if (status !== 200) throw "session nao iniciada";
  //     store.dispatch("Account/ActionSetUser", user);
  //     if (store.getters["Company/companies"].length == 0) {
  //       const { data: companies } = await http.get(`companies/me`);
  //       if (companies.length > 0)
  //         store.dispatch("Company/ActionSetCompanies", companies);
  //       if (companies.length > 0)
  //         store.dispatch(
  //           "Company/ActionSetCompanySelect",
  //           companies.find(
  //             (item) =>
  //               item.id_company == user.preference.company_default.id_company
  //           )
  //         );
  //     }
      next();
  //   } catch (error) {
  //     error.response ? console.log(error.response.data) : console.log(error);
  //     next({ name: "SignIn" });
  //   } finally {
  //       store.dispatch("ActionSetLoading", false);
  //   }
  // } else {
  //   store.dispatch("ActionSetLoading", true);
  //   try {
  //     if (!token) throw "token não informado";
  //     await http.get("account/me");
  //     console.log("🚀 ~ file: authGuard.js ~ line 19 ~ user");
  //     next({ name: "Main" });
  //   } catch (error) {
  //     error.response ? console.log(error.response.data) : console.log(error);
  //     next();
  //   } finally {
  //       store.dispatch("ActionSetLoading", false);
  //   }
  // }
};