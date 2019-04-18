<template>
  <div id="fanza-video-modal">
    <fanza-modal :visible.sync="visible" :item-link="itemLink" :title="title">
      <fanza-video ref="fanzaVideo" :src="videoSrc"></fanza-video>
    </fanza-modal>
    <button @click="openVideo('ipx00250_sm_w.mp4')">ipx00250_sm_w.mp4</button>
    <button @click="openVideo('ssni00456_sm_w.mp4')">ssni00456_sm_w.mp4</button>
  </div>
</template>

<script>
import FanzaModal from './components/FanzaModal.vue';
import FanzaVideo from './components/FanzaVideo.vue';

export default {
  components: {
    FanzaVideo,
    FanzaModal
  },
  data() {
    return {
      videoSrc: '',
      itemLink:
        'https://www.dmm.co.jp/digital/videoa/-/detail/=/cid=118mgt00069/',
      title:
        '街角シロウトナンパ！ vol.44 あなたよりエロい友達（ヤリマン）を紹介して下さい！ 1',
      visible: false
    };
  },
  computed: {
    player() {
      return this.$refs.fanzaVideo.player;
    }
  },
  watch: {
    visible(value) {
      if (!value) {
        this.player.pause();
      }
    }
  },
  methods: {
    openVideo(src) {
      this.videoSrc = src;
      this.visible = true;
    }
  }
};
</script>
