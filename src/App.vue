<template>
<div class="float-left">
  <img class="h-20 w-25" src="./assets/logo.png">
</div>
  <div class="float-right pr-10" id="nav">
    <router-link to="/">About Me</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
  </div>
  <router-view class="bg-yellow-200" />
</template>

<script setup>
// import HelloWorld from "./components/HelloWorld.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#nav {
  padding: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>