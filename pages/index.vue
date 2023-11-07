<template>
  <b-container fluid class="content">
    <div class="landing">
      <h1 class="landing-text">
        I am a <span style="color: #705c93">Software Developer</span>
      </h1>
      <h3 class="landing-subtext">with experience in Full Stack and Embedded development</h3>
      <a class="social-link" href="https://www.linkedin.com/in/daniel-chua-b97bb6149/"><b-img src="@/assets/logos/LI-light.png" height="32px" width="32px" /></a>
      <a class="social-link" href="https://github.com/DCH25"><b-img src="@/assets/logos/GitHub-light.png" height="32px" width="32px" /></a>
      <a href="../../Daniel_Chua_CV.pdf" download="">
        <b-button class="resume-button">
          Resume (PDF)
        </b-button>
      </a>
    </div>
  </b-container>
</template>

<script>
export default {}
</script>

<style scoped>
.content {
  height: calc(100vh - 68px);
  padding: 0;
}
.landing {
  margin: 0;
  padding-top: 15%;
  width: 100%;
  padding-left: 16px;
}
.landing-text {
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 5rem);
}
.landing-subtext {
  font-size: clamp(1rem, 3vw, 3rem);
}
.social-link {
  padding-right: 8px;
}
.resume-button {
  background-color: #705c93;
  color: #ddd7e5;
  border: none;
}
.resume-button:hover {
  outline: 2px solid #ddd7e5;
}
.resume-button:focus {
  outline: 2px solid #ddd7e5;
}
</style>
