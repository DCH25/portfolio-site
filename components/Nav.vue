<template>
  <b-navbar toggleable="sm" sticky>
    <b-navbar-brand>
      Daniel Chua
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item active>
          Home
        </b-nav-item>
        <b-nav-item>Projects</b-nav-item>
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
    width: 100vw;
    font-size: 1.5rem;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
}
.navbar-brand {
    color: #E54B4B;
    font-size: 1.5rem;
}
</style>
