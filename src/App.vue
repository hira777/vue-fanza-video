<template>
  <div id="app">
    <fanza-video :src="currentSrc"></fanza-video>
    <button @click="video('ipx00250_sm_w.mp4')">ipx00250_sm_w.mp4</button>
    <button @click="video('ssni00456_sm_w.mp4')">ssni00456_sm_w.mp4</button>
  </div>
</template>

<script>
import FanzaVideo from './components/FanzaVideo.vue';

export default {
  components: { FanzaVideo },
  data() {
    return {
      currentSrc: ''
    };
  },
  methods: {
    video(src) {
      this.currentSrc = src;
    }
  }
};
</script>
