import authActions from './authActions.js';
import authMutations from './authMutations';
import authGetters from './authGetters';

export default {
  namespaced: true,
  state() {
    return {
      currentUser: { id: 0, username: '', email: '' },
      registrationError: false,
      isLoggedIn: false,
      errorMsg: '',
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
