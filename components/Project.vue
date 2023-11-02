<template>
  <b-card
    :title="post.title"
    :img-src="post.image"
  >
    <b-button
      v-for="tag in post.tags"
      :key="tag"
      variant="outline-secondary"
      pill
    >
      {{ tag }}
    </b-button>
    <b-card-text>{{ post.description }}</b-card-text>
    <b-button
      :href="post.link"
      class="demo-button"
      target="_blank"
    >
      View Demo
    </b-button>
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
.card {
  margin: 20px;
  min-width: 30rem;
  background-color: #DDD7E5;
}
.rounded-pill {
  margin-right: 5px;
  color: #161023;
}.card-text {
  padding-top: 2vh;
  color: black;
}
.demo-button {
  background-color: #705C93;
}
@media (max-width: 600px)
{
  .card {
    margin: 20px;
    min-width: 18rem;
}
}
</style>
