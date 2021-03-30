<template>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password" />
  </div>
  <button @click="loginUser">Login</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    loginUser() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      this.login(userData);
    },
  },
};
</script>
