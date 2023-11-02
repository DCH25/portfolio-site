<template>
  <b-container fluid class="wrapper">
    <Nav />
    <Nuxt />
  </b-container>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components: {
    Nav
  }
}
</script>
<style>
.wrapper {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #161024;
  color: #dcd6e5;
  overflow-x: hidden;
}
</style>
