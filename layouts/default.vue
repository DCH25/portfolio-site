<template>
  <b-container fluid class="wrapper">
    <Nav />
    <Nuxt />
    <Footer />
  </b-container>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>
<style>
.wrapper {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: #18181e;
  overflow-x: hidden;
}
</style>
