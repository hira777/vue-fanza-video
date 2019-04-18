<template>
  <div v-if="src !== ''" class="fanza-video">
    <video
      ref="video"
      autoplay
      :src="src"
      :currentTime.prop="time"
      @loadstart="hanleLoadStart"
      @canplaythrough="handleCanplayThrough"
      @timeupdate="handleTimeUpdate"
    ></video>
    <div>
      <button @click="play">再生</button>
      <button @click="pause">停止</button>
      <button @click="backward10Seconds">10秒戻る</button>
      <button @click="forward10Seconds">10秒進む</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FanzaVideo',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      player: null,
      time: 0,
      currentTime: 0,
      duration: 0,
      isLoading: true
    };
  },
  mounted() {
    if (!this.player) {
      this.initialize();
    }
  },
  methods: {
    initialize() {
      this.player = this;
    },
    play() {
      this.$refs.video.play();
    },
    pause() {
      this.$refs.video.pause();
    },
    forward10Seconds() {
      const nextTime = this.currentTime + 10;
      this.time = nextTime < this.duration ? nextTime : this.duration;
    },
    backward10Seconds() {
      const nextTime = this.currentTime - 10;
      this.time = nextTime > 0 ? nextTime : 0;
    },
    handleTimeUpdate() {
      if (this.isLoading || typeof this.$refs.video === 'undefined') return;
      this.currentTime = Math.floor(this.$refs.video.currentTime);
    },
    hanleLoadStart() {
      this.isLoading = true;
    },
    handleCanplayThrough() {
      this.isLoading = false;
      this.duration = Math.floor(this.$refs.video.duration);
    }
  }
};
</script>

<style>
.fanza-video video {
  margin: 0;
  padding: 0;
  width: 560px;
  height: auto;
}
</style>
