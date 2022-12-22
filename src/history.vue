<template>
  <div id="container">
    <video autoplay loop muted>
      <source src="./assets/history.mp4" type="video/mp4" />
    </video>
    <div id="title">
      <h1>逐梦苍穹</h1>
      <br />
      <div class="desc">
        <p>
          <span>致敬伟大的中国航空航天事业</span>
        </p>
      </div>
    </div>
    <div id="next" @click="moveNext('timeline')">
      <svg
        t="1667058720880"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="16132"
        width="64"
        height="64"
      >
        <path
          d="M726.62 470.62L545.94 651.31c-18.72 18.72-49.16 18.72-67.88 0L297.38 470.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L512 594.75l169.38-169.38c12.5-12.5 32.75-12.5 45.25 0 6.25 6.25 9.38 14.44 9.38 22.62s-3.13 16.39-9.39 22.63zM523.31 606.38v-0.31 0.31z"
          p-id="16133"
          fill="#dbdbdb"
        ></path>
        <path
          d="M128 512c0-211.74 172.26-384 384-384s384 172.26 384 384-172.26 384-384 384-384-172.26-384-384m-64 0c0 247.42 200.58 448 448 448s448-200.58 448-448S759.42 64 512 64 64 264.58 64 512z"
          p-id="16134"
          fill="#dbdbdb"
        ></path>
      </svg>
    </div>
    <TimeLine id="timeline" />
    <div id="next2" @click="moveNext('report')">
      <svg
        t="1667058720880"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="16132"
        width="64"
        height="64"
      >
        <path
          d="M726.62 470.62L545.94 651.31c-18.72 18.72-49.16 18.72-67.88 0L297.38 470.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L512 594.75l169.38-169.38c12.5-12.5 32.75-12.5 45.25 0 6.25 6.25 9.38 14.44 9.38 22.62s-3.13 16.39-9.39 22.63zM523.31 606.38v-0.31 0.31z"
          p-id="16133"
          fill="#dbdbdb"
        ></path>
        <path
          d="M128 512c0-211.74 172.26-384 384-384s384 172.26 384 384-172.26 384-384 384-384-172.26-384-384m-64 0c0 247.42 200.58 448 448 448s448-200.58 448-448S759.42 64 512 64 64 264.58 64 512z"
          p-id="16134"
          fill="#dbdbdb"
        ></path>
      </svg>
    </div>
    <Report id="report" />
    <div id="next3" @click="moveNext('starSky')">
      <svg
        t="1667058720880"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="16132"
        width="64"
        height="64"
      >
        <path
          d="M726.62 470.62L545.94 651.31c-18.72 18.72-49.16 18.72-67.88 0L297.38 470.62c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L512 594.75l169.38-169.38c12.5-12.5 32.75-12.5 45.25 0 6.25 6.25 9.38 14.44 9.38 22.62s-3.13 16.39-9.39 22.63zM523.31 606.38v-0.31 0.31z"
          p-id="16133"
          fill="#dbdbdb"
        ></path>
        <path
          d="M128 512c0-211.74 172.26-384 384-384s384 172.26 384 384-172.26 384-384 384-384-172.26-384-384m-64 0c0 247.42 200.58 448 448 448s448-200.58 448-448S759.42 64 512 64 64 264.58 64 512z"
          p-id="16134"
          fill="#dbdbdb"
        ></path>
      </svg>
    </div>
    <StarSky id="starSky" />
  </div>
</template>
<script lang="ts">
import TimeLine from './components/timeLine.vue';
import Report from './components/report.vue';
import StarSky from './components/starSky.vue';
export default {
  components: {
    TimeLine,
    Report,
    StarSky,
  },
  methods: {
    moveNext(next) {
      let offset = 0;
      const timeline = document.getElementById(next);
      if (timeline) {
        offset = timeline.offsetTop;
      }
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style scoped>
body {
  scroll-behavior: smooth;
}

* {
  margin: 0px;
  padding: 0px;
}

#container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

h1 {
  display: inline-block;
  margin: 1rem 0;
  font-size: 8rem;
  background-image: linear-gradient(
    60deg,
    rgb(0, 34, 255) -10.39%,
    rgb(81, 121, 254) -7.38%,
    rgb(165, 237, 182) 30.59%,
    rgb(250, 232, 90) 46.06%,
    rgb(253, 172, 62) 62.61%,
    rgb(255, 125, 49) 75.82%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

video {
  position: absolute;
  right: 0px;
  bottom: 0px;
  min-width: 120%;
  min-height: 100%;
  width: auto;
  height: auto;
  /*加滤镜*/
  filter: alpha(opacity=50);
  opacity: 0.5;
  z-index: -11;
}

source {
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}

#title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-80%);
  font-family: 'KaiTi', 'STXingkai';
}

#title h1 {
  font-size: 7rem;
}

#next {
  position: absolute;
  bottom: 10%;
  left: 50%;
  margin-left: -32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#next:hover {
  transform: scale(1.1);
  transition: 0.5s ease all;
}

#timeline {
  position: absolute;
  top: 100%;
  width: 100%;
}

#next2 {
  position: absolute;
  top: 615%;
  left: 50%;
  margin-left: -32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#next2:hover {
  transform: scale(1.1);
  transition: 0.5s ease all;
}

#report {
  position: absolute;
  top: 625%;
  width: 100%;
}

#next3 {
  position: absolute;
  top: 715%;
  left: 50%;
  margin-left: -32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#next3:hover {
  transform: scale(1.1);
  transition: 0.5s ease all;
}

#starSky {
  position: absolute;
  top: 725%;
  width: 100%;
}
.desc p span {
  font-size: 1.8rem;
  opacity: 0;
  position: relative;
  top: 2rem;
  animation: swift-up 0.5s forwards, fade-in 0.5s forwards;
}

.desc p span {
  animation-delay: calc(var(--i) * 0.15s);
}

@keyframes swift-up {
  to {
    top: 0;
  }
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}
</style>
