<template>
  <b-container fluid class="content">
    <b-container fluid class="landing">
      <b-row
        class="top-landing"
        align-v="end"
        align-h="center"
      >
        <b-col>
          <h1 class="landing-text">
            I am a <span style="color: #705c93">Software Developer</span>
          </h1>
        </b-col>
      </b-row>
      <b-row class="bot-landing">
        <b-col>
          <h3>with experience in Full Stack and Embedded development</h3>
          <a class="social-link" href="https://www.linkedin.com/in/daniel-chua-b97bb6149/"><b-img src="@/assets/logos/LI-light.png" height="32px" width="32px" /></a>
          <a class="social-link" href="https://github.com/DCH25"><b-img src="@/assets/logos/GitHub-light.png" height="32px" width="32px" /></a>
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
}
.landing {
  margin: 0;
  width: 100%;
  height: 100vh;
  padding-left: 16px;
}
.landing-text {
  font-weight: 700;
  font-size: 5rem;
}
.top-landing, .bot-landing {
  height: 50%;
}
.social-link {
  padding-right: 5px;
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
