<template>
  <Layout>
    <div class="img-holder">
      <img class="page-logo" src="../assets/images/logo.png" alt="">
      <img class="dice-page-logo" src="../assets/images/dice-logo.png" alt="">
    </div>
    <!-- <video loop muted id="orenda-video">
      <source src="../assets/video/gavin.mp4" type="video/mp4">
    </video> -->

    <div class="video-content">
      <button
        id="toggle-btn"
        class="btn btn-dark hidden"
        @click="togglePlay()">Pause</button>
    </div>
  </Layout>
</template>

<script>
export default {
  methods: {
    togglePlay () {
      // Get the video
      let video = document.getElementById("orenda-video");

      // Get the button
      let btn = document.getElementById("toggle-btn");

      // Pause and play the video, and change the button text
      if (video.paused) {
        video.play();
        btn.innerHTML = 'Pause'
      } else {
        video.pause();
        btn.innerHTML = 'Play'
      }
    }
  }
}
</script>
