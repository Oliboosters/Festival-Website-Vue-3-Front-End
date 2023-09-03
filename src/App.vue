<template>
  <div id="app">
    <Navbar></Navbar>
    <RouterView v-slot="{ Component, route }">
      <Transition 
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
        mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </Transition>
    </RouterView>
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar.vue';

export default {
  components: {
    Navbar
  },

  data() {
    return {
      msg: 'Hello and welcome to my app ^_^ '
    }
  }
}
</script>

<style>
@import './assets/fonts.css';

body {
  background-color: #545E78;
}

</style>
