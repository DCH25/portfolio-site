<template>
  <b-card
    :title="post.title"
  >
    <b-card-text>{{ post.description }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style scoped>
</style>
