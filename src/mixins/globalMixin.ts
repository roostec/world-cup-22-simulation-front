// import { useQuasar } from 'quasar';


// export default {
  
//   // async logIn(form) {
//   //   this.$q.loading.show();
//   //   try {
//   //     if (!form.email) throw "email empty";
//   //     if (!form.password) throw "password empty";
//   //     const { data, status } = await this.$http.post(
//   //       "account/authentication",
//   //       form
//   //     );
//   //     if (status === 200) {
//   //       localStorage.setItem("agendaih_token", data.token);
//   //       this.$router.push({ name: "Main" });
//   //     }
//   //   } catch (error) {
//   //     console.log(error.response);
//   //     this.errorNotify(error);
//   //   } finally {
//   //     this.$q.loading.hide();
//   //   }
//   // },
//   setModeDark() {
//     if (this.$q.dark.isActive) this.$q.dark.set(false);
//     else this.$q.dark.set(true);
//   },
// }