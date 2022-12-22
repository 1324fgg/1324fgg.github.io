<template>
  <div class="container">
    <div class="screen s1">
      <div class="card-container">
        <FlipCard v-for="(item, index) in cardData" :key="index" v-bind="item"></FlipCard>
      </div>
    </div>
    <div class="screen s2">
      <div class="satellite"></div>
      <div class="info-card">
        <div></div>
        <video src="/space.mp4" autoplay muted loop></video>
      </div>
    </div>
  </div>
</template>
<script>
import FlipCard from './components/flipCard.vue';
import { cardData } from './assets/cardData.js';
export default {
  components: {
    FlipCard,
  },
  data() {
    return {
      cardData: [],
    };
  },
  mounted() {
    this.cardData = cardData;
    const html = document.documentElement;
    const screen = document.querySelector('.s2');

    const start = 200;
    const end = 700;
    document.addEventListener('scroll', (e) => {
      // let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight);
      let scrolled = html.scrollTop;
      let progress = (scrolled - start) / (end - start);
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      screen.style.setProperty('--progress', progress);
    });
  },
};
</script>

<style scoped>
.container {
  height: 200vh;
  width: 100%;
}
.screen {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.s1 {
  position: absolute;
  width: 100%;
  z-index: 1;
  background-image: url('/image/earth-bg.jpg');
  background-size: cover;
}
.s1 .card-container {
  display: flex;
  justify-content: space-around;
  width: 70rem;
  flex-wrap: wrap;
}
.s2 {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 0;
  background-color: #fff;
  perspective: 100px;
  overflow: hidden;
  background-image: url('/image/earth-bg.jpg');
  --progress: 0;
}
.s2 .satellite {
  position: absolute;
  bottom: 3rem;
  left: 2rem;
  width: 8rem;
  height: 8rem;
  background-image: url('/image/satellite.png');
  background-size: contain;
  animation: float 3s ease-in-out infinite;
  z-index: 1;
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(calc(90deg * var(--progress)));
  }
  50% {
    transform: translateY(30px) rotate(calc(90deg * var(--progress)));
  }
}
.s2 .info-card {
  width: 80%;
  overflow: hidden;
  transform-origin: center;
  transform: rotateX(calc(70deg - calc(70deg * var(--progress))));
}
.s2 video {
  position: relative;
  width: 100%;
}
</style>
