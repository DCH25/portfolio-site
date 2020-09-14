<template>
  <b-container fluid class="wrapper">
    <b-row>
      <Nav />
    </b-row>
    <b-row>
      <Nuxt />
    </b-row>
    <b-row>
      <Footer />
    </b-row>
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
  width: 100%;
}
</style>
