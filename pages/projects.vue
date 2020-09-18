<template>
  <b-container fluid class="projects">
    <h1 style="text-align: center">
      My Projects
    </h1>
    <b-row
      cols="1"
      cols-sm="1"
      cols-md="2"
      cols-lg="3"
    >
      <Project v-for="project in projects" :key="project.title" :post="project" />
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
  background-color: #18181e;
  font-family: 'Libre Baskerville', 'serif';
  height: 100vh;
  padding-top: 2vh;
}
.col {
  padding-top: 2vh;
}
h1 {
  color: white;
}
</style>
