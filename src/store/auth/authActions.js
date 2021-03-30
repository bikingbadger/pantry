import firebase from '@/firebase.js';

const userRef = firebase.firestore().collection('/user');

export default {
  async register({ commit }, user) {
    try {
      // Register user
      const registered = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      // Create userdata
      const userData = {
        id: registered.user.uid,
        username: user.username,
        email: user.email,
      };

      // Save user to DB
      const createUser = await userRef.add(userData);
      commit('authSuccess', createUser);
    } catch (err) {
      commit('authFail', err);
    }
  },
  async login({ commit }, user) {
    try {
      const loggedIn = await firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password);

      const userData = {
        id: loggedIn.user.uid,
        username: user.username,
        email: user.email,
      };

      commit('authSuccess', userData);
    } catch (err) {
      commit('authFail', err);
    }
  },
  async logout({ commit }) {
    await firebase.auth().signOut();
    commit('logout');
  },
};
