<template>
  <b-navbar toggleable="sm" sticky>
    <b-nav-text>Daniel <span style="color: #705c93">Chua</span></b-nav-text>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav align="right">
        <b-nav-item to="/" exact>
          home
        </b-nav-item>
        <b-nav-item to="/projects" exact>
          projects
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
    background-color: #161024;
    font-size: 1.5rem;
}
.navbar-text {
  color: #dcd6e5 !important;
}

.nav-link{
  color: #dcd6e5 !important;
}

.navbar-nav {
  width: 100%;
}
.nuxt-link-active {
  color: #705c93 !important;
}
</style>
