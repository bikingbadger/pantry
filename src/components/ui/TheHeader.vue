<template>
  <img
    alt="App logo"
    src="https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1611488325/pantry/cooking-robot_xdaw7k.png"
  />
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-if="isLoggedIn" to="/ingredients"> Ingredients</router-link>
  </div>
  <div id="auth">
    <router-link v-if="!isLoggedIn" to="/login" tag="button">
      <button>Login</button>
    </router-link>
    <router-link v-if="!isLoggedIn" to="/register">
      <button>Register</button>
    </router-link>
    <button v-if="isLoggedIn" @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
};
</script>
