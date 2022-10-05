export default {
  namespaced: true,
  state: {
    users: ['daniel', 'james', 'john', 'peter'],
    sports: {},
  },
  getters: {
    users: (state:any) => state.users,
    getStories: (state: any) => (hash: any) => {
      if (hash) {
      const key = hash;
      // if (key in state.stories) {
        return state.sports[key.storyId];
        // }
      }
      return state.sports;
      // return [];
    },
  },
  mutations: {
    SET_USERS(state:any, payload:any) {
      state.users = payload;
    },
    SET_SPORTS(state: any, payload: any) {
      state.sports[payload.storyId] = payload.sport;
    },
  },
  actions: {
    ActionSetUsers({ commit }:any, payload:any) {
      commit("SET_USERS", payload);
    },
    ActionSetSports({ commit, state }:any, payload:any) {
      commit("SET_SPORTS", payload);
    },
  },
};