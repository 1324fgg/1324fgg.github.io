<script>
import BackTop from './components/backTop.vue';
import NaviBar from './components/naviBar.vue';
export default {
  components: {
    BackTop,
    NaviBar,
  },
};
</script>

<template>
  <NaviBar />
  <div>
    <router-view></router-view>
  </div>
  <BackTop />
  <audio src="/musics/sky.mp3" autoplay="autoplay" controls="controls" preload="auto" loop></audio>
</template>

<style scoped>
audio {
  display: none;
}
</style>
