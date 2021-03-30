import router from '@/router';

export default {
  authSuccess(state, user) {
    state.currentUser.id = user.uid;
    state.currentUser.email = user.email;
    state.currentUser.username = user.username;
    state.registrationError = false;
    state.isLoggedIn = true;
    state.errorMsg = '';
    router.push({ name: 'home' });
  },
  authFail(state, error) {
    state.registrationError = true;
    state.isLoggedIn = false;
    state.errorMsg = error.message;
  },
  logout(state) {
    state.isLoggedIn = false;
    state.currentUser.id = null;
    state.currentUser.email = null;
    state.currentUser.username = null;
    router.replace({ name: 'home' });
  },
};
