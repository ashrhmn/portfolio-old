<template>
  <div>
    <div class="float-left">
      <img class="h-20 w-25" src="./assets/logo.png" />
    </div>
    <div class="float-right pr-10" id="nav">
      <router-link to="/">About Me</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
    </div>
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
        style="animation-duration: 0.15s"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
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
  background: hsl(0, 0%, 94%);
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
  /* color: #42b983; */
  color: #3ba3dc;
  /* color: #3beefa; */
  font-weight: 800;
  text-decoration-line: underline;
}

.page {
  width: 100%;
  max-width: 768px;
  padding: 15px;
  box-sizing: border-box;
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-out-in, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>