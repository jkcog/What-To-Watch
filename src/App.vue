<template>
<div class="font-mont bg-primary h-screen">
    <Nav />
    <transition name="page">
    <router-view>
    </router-view>
    </transition>
</div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  components: { Nav },
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.page-enter-active, .view-leave-active {
  transition: opacity 0.7s ease-out, transform 0.7s ease-in-out;
}
.page-enter-active {
  transition-delay: 0s;
}
.page-enter {
  opacity: 0;
  /* transform: translateY(200px); */
}
.page-enter-to {
  opacity: 1;
  /* transform: translateY(0px); */
}
.page-leave {
  opacity: 1;
  /* transform: translateY(0px); */
}
.page-leave-to {
  opacity: 0;
  /* transform: translateY(-200px); */
}
</style>
