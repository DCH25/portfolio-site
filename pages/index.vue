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
          <h1 style="color: #dec79b">
            About Me
          </h1>
          <h3>I'm Daniel Chua, currently in my second year of Computer Science at the University of Toronto</h3>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
}
</script>

<style scoped>
.content {
  padding: 0;
  font-family: 'Libre Baskerville', 'serif';
  color: white;
}
.landing {
  margin: 0;
  width: 100%;
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
