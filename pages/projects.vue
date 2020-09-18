<template>
  <b-container class="projects">
    <h1>My Projects</h1>
    <div v-for="project in projects" :key="project.title">
      <Project v-bind:post="project" />
    </div>
  </b-container>
</template>

<script>
import Project from '@/components/Project'
export default {
  components: {
    Project
  },
  async asyncData (context) {
    // eslint-disable-next-line no-unused-vars
    const projects = await context.app.contentfulClient.getProjectContent()

    return {
      projects: await context.app.contentfulClient.getProjectContent()
    }
  }
}
</script>

<style scoped>
</style>
