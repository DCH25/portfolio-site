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
<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
}
</style>
