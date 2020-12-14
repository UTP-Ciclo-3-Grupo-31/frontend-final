<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <home-component></home-component>

  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponente.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent
  }
}
</script>
