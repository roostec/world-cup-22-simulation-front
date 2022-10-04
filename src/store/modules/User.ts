export default {
  namespaced: true,
  state: {
    users: ['daniel', 'james', 'john', 'peter'],
  },
  getters: {
    users: (state:any) => state.users,
  },
  mutations: {
    SET_USERS(state:any, payload:any) {
      state.users = payload;
    },
  },
  actions: {
    ActionSetUsers({ commit }:any, payload:any) {
      commit("SET_USERS", payload);
    },
  },
};