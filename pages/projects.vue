<template>
  <b-container fluid class="content">
    <b-container fluid class="landing">
      <b-row class="top-landing" align-v="end">
        <b-col>
          <h1>Projects</h1>
        </b-col>
      </b-row>
      <b-row class="bot-landing">
        <b-col>
          <h1>Sample Text</h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col>
          <h1>SKILLSET</h1>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {}
</script>

<style>
.content {
  padding: 0;
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
    font-size: 1rem;
  }
}
</style>
