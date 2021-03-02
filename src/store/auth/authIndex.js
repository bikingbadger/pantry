import authActions from './authActions.js';
import authMutations from './authMutations';
import authGetters from './authGetters';

export default {
  namespaced: true,
  state: {},
  mutations: {
    authMutations,
  },
  actions: {
    authActions,
  },
  getters: {
    authGetters,
  },
};
