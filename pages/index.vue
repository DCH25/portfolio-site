<template>
  <b-container fluid class="content">
    <b-container fluid class="landing">
      <b-row
        class="top-landing"
        align-v="end"
        align-h="center"
      >
        <b-col>
          <h1>
            I am a <span style="color: #dec79b">Computer Science</span> student
          </h1>
        </b-col>
      </b-row>
      <b-row class="bot-landing">
        <b-col>
          <h3>with experience in frontend development</h3>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="skills">
      <b-row>
        <b-col>
          <Command text="cat about.txt" />
          <h3>I'm Daniel Chua, currently in my second year of Computer Science at the University of Toronto.</h3>
          <Command text="sort main-skillset.txt" />
          <h3>Content Management (Netlify, Contentful)</h3>
          <h3>Object Oriented Programming Languages: C#, Java</h3>
          <h3>UNIX shell, C programming</h3>
          <h3>Web App Development</h3>
          <Command text="cat contact.txt" />
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Command from '@/components/Command'
export default {
  components: {
    Command
  }
}
</script>

<style scoped>
.content {
  padding: 0;
  font-family: 'PT Serif', serif;
  color: white;
}
.landing {
  margin: 0;
  width: 100%;
  height: 100vh;
}
.skills {
  background-color: black;
  font-family: 'Ubuntu Mono', monospace;
  padding-top: 2vh;
  height: 100vh;
}
.top-landing, .bot-landing {
  height: 50%;
}
@media (max-width: 720px)
{
  h1 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1rem;
  }
}
</style>
