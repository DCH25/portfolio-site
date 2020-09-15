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
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.5rem;
}
</style>
