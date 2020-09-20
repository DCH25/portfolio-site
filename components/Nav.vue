<template>
  <b-navbar toggleable="sm" sticky>
    <b-nav-text>DANIEL <span style="color: #e94560">CHUA</span></b-nav-text>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav align="right">
        <b-nav-item to="/" exact>
          HOME
        </b-nav-item>
        <b-nav-item to="/projects" exact>
          PROJECTS
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    width: 100%;
    background-color: white;
    font-size: 1.5rem;
}
.navbar-text {
  color: black !important;
}
.navbar-nav {
  width: 100%;
}
.nuxt-link-active {
  color: #e94560 !important;
}
</style>
