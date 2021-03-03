<template>
  <div>
    <label for="username">Username</label>
    <input type="text" name="username" id="username" v-model="username" />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password" />
  </div>
  <button @click="registerUser">Register</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['register']),
    registerUser() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      this.register(userData);
    },
  },
};
</script>
