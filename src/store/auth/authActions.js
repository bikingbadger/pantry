import firebase from '@/firebase.js';

const userRef = firebase.firestore().collection('/user');

export default {
  async register({ commit }, user) {
    try {
      // Register user
      const registered = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      console.log(registered);

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
};
