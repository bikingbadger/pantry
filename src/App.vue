<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from '@/components/ui/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
:root {
  --clr-neutral-500: #2c3e50;

  --clr-accent-500: #00b8f0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--clr-neutral-500);
}

img {
  display: block;
  margin: 0 auto;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: var(--clr-neutral-500);
}

#nav a.router-link-exact-active {
  color: var(--clr-accent-500);
}
</style>
