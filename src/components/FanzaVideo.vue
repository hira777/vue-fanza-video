<template>
  <div v-if="src !== ''" class="fanza-video">
    <video
      ref="video"
      autoplay
      :src="src"
      :currentTime.prop="time"
      @loadstart="hanleLoadStart"
      @canplaythrough="handleCanplayThrough"
      @play="handlePlay"
      @pause="handlePause"
      @timeupdate="handleTimeUpdate"
    ></video>
    <div>
      10
      <font-awesome-icon
        :icon="['fas', 'undo']"
        size="2x"
        class="fanza-video-button"
        @click="backward10Seconds"
      />
      <font-awesome-icon
        v-show="!isPlaying"
        :icon="['far', 'play-circle']"
        size="3x"
        class="fanza-video-button"
        @click="play"
      />
      <font-awesome-icon
        v-show="isPlaying"
        :icon="['far', 'pause-circle']"
        size="3x"
        class="fanza-video-button"
        @click="pause"
      />
      <font-awesome-icon
        :icon="['fas', 'redo']"
        size="2x"
        class="fanza-video-button"
        @click="forward10Seconds"
      />
      10
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
      isLoading: true,
      isPlaying: false
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
      if (this.isPlaying) return;
      this.$refs.video.play();
    },
    pause() {
      if (!this.isPlaying) return;
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
    handlePlay() {
      this.isPlaying = true;
    },
    handlePause() {
      this.isPlaying = false;
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

.fanza-video-button {
  color: #fff;
  opacity: 0.7;
  cursor: pointer;
}

.fanza-video-button:hover {
  opacity: 1;
}
</style>
