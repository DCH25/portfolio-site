<template>
  <b-container fluid class="projects">
    <h1 style="text-align: center">
      My Projects
    </h1>
    <b-row>
      <b-card-group deck>
        <Project v-for="project in projects" :key="project.title" :post="project" />
      </b-card-group>
    </b-row>
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
.projects {
  min-height: 100vh;
  padding-top: 2vh;
  padding-bottom: 10vh;
}
h1 {
  color: white;
}
</style>
