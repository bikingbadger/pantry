<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
:root {
  --clr-neutral-500: #2c3e50;

  --clr-accent-500: #00b8f0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--clr-neutral-500);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--clr-neutral-500);
}

#nav a.router-link-exact-active {
  color: var(--clr-accent-500);
}
</style>
