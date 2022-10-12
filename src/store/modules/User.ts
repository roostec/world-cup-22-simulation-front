import services from '../../services';
import i18n from "../../plugins/i18n"; 


export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    location: null,
    languages: [
      { label: 'English', language: 'en', flag: 'united-states', country: 'US'},
      // { label: 'Español', language: 'es', flag: 'spain', country: 'US'},
      { label: 'Portugues', language: 'pt', flag: 'portugal', country: 'BR'}
    ],
    selectedLanguage: null,
  },
  getters: {
    token: (state:any) => state.token,
    user: (state:any) => state.user,
    languages: (state:any) => state.languages,
    location: (state:any) => state.location,
    selectedLanguage: (state:any) => state.selectedLanguage,
  },
  mutations: {
    SET_TOKEN(state:any, payload:any) {
      state.token = payload;
    },
    SET_USER(state:any, payload:any) {
      state.user = payload;
    },
    SET_LOCATION(state:any, payload:any) {
      state.location = payload;
    },
    SET_LANGUAGE(state:any, payload:any) {
      state.selectedLanguage = payload;
    },
  },
  actions: {
    async ActionLogin({ commit }: any, {email, password}: any = null) {
      if (email && password) {
        const response:any = await services.login(email, password);
        if (response.status === 201) {
          commit('SET_TOKEN', response.data);
          localStorage.setItem("access_token", response.data.access_token);
          return response;
        }
      }
      commit('SET_TOKEN', null);
      return;
    },  

    async ActionSetMe({ commit, dispatch }:any, payload:any = true) {
      if (payload) { 
        const user:any = await services.me();
        if (user.status === 200) {
          commit("SET_USER", user.data);
          if (user.data.preference[0].language) {
            const lang = user.data.preference[0].language
            dispatch("ActionSetLanguage", lang);
          } else dispatch("ActionSetLocation");
          return user;
        }
      }
      commit("SET_USER", null);
      return;
    },

    async ActionSetLocation({ commit, dispatch }:any) {
        const response:any = await services.ipInfo();
        if (response.status === 200) {
          commit("SET_LOCATION", response.data);
          dispatch('ActionSetLanguage', response.data);
          return response.data;
      }
    },

    ActionSetLanguage({ commit, state }:any, payload:any) {
        if (!payload.country) {
          const lang = state.languages.find((language:any) => language.language === payload.substring(0, 2));
          i18n.global.locale.value = lang.language;
          commit("SET_LANGUAGE", lang);            
          return;
        }
        const lang = state.languages.find((language:any) => language.country === payload.country);
        i18n.global.locale.value = lang.language;
        commit("SET_LANGUAGE", lang);
    },
  },
};