import { createStore } from 'vuex';

import authModule from './auth/authIndex';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth: authModule },
});
