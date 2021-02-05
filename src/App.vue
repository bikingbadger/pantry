<template>
  <img
    alt="App logo"
    src="https://res.cloudinary.com/hiltonmeyer-com/image/upload/v1611488325/pantry/cooking-robot_xdaw7k.png"
  />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/ingredients">Ingredients</router-link>
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
