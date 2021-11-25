<template>
<div class="font-mont bg-primary h-screen w-screen">
  <!-- Navigation bar -->
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
/* page transition fade animation */
.page-enter-active, .view-leave-active {
  transition: opacity 0.9s ease-out, transform 0.9s ease-out;
}
.page-enter-active {
  transition-delay: 0s;
}
.page-enter {
  opacity: 0;
}
.page-enter-to {
  opacity: 1;
}
.page-leave {
  opacity: 1;
}
.page-leave-to {
  opacity: 0;
}
</style>
