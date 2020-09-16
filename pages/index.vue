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
      <b-row align-h="center">
        <h1>About Me</h1>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
}
</script>

<style>
.skills {
  padding: 2vh;
  font-family: 'Libre Baskerville', 'serif';
}
.landing {
  margin: 0;
  width: 100%;
  background-color: #18181e;
  height: 100vh;
  word-break: break-all;
  color: white;
  font-family: 'Libre Baskerville', 'serif';
}
.top-landing, .bot-landing {
  height: 50%;
}
@media (max-width: 600px)
{
  h1 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1rem;
  }
}
</style>
