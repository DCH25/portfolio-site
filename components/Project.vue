<template>
  <b-col>
    <b-card
      :title="post.title"
    >
      <b-card-text>{{ post.description }}</b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style scoped>
  .card {
    max-width: 540px;
  }
  .card-text {
    color: black;
  }
</style>
