<template>
  <div class="container">
    <div class="desc">
      <h1>太空之眼。</h1>
      <p>
        <span style="--i: 0">“你眼中的星星，</span><span style="--i: 1">可能在亿万年前已经爆炸，</span
        ><span style="--i: 2">它的光撞入你的眼睛，</span><span style="--i: 3">是最大的惊喜和意外。”</span
        ><span style="--i: 4">——杨南生（中国火箭事业的开创者）</span>
      </p>
      <p>
        <span style="--i: 6"> 航天，不是一个词能够说完的，不是一个人能够代表的。</span>
        <br />
        <span style="--i: 7"> 从事业上讲，他是我们在黄土沙上摸索着黑暗拼凑出来的；</span>
        <br />
        <span style="--i: 8"> 从知识上讲，他是我们在实验室冷板凳上隐姓埋名试验出来的。</span>
      </p>
    </div>
    <div class="pic">
      <div class="earth"></div>
    </div>
  </div>
</template>

<style scoped>
.container:before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50%;
  border-radius: 100%;
  width: 3px;
  height: 4px;
  z-index: 1;
  opacity: 0.3;
  box-shadow: 5vw 15vh 2px white, 1vw 33vh 0px white, 2vw 25vh 2px white, 10vw 10vh 2px white, 12vw 20vh 0px white,
    30vw 15vh 2px white, 16vw 5vh 2px white, 24vw 10vh 0px white, 32vw 40vh 0px white, 33vw 35vh 2px white,
    12vw 38vh 2px white, 24vw 10vh 0px white, 33vw 5vh 2px white, 20vw 10vh 0px white, 80vw 10vh 2px white,
    62vw 20vh 0px white, 60vw 15vh 2px white, 70vw 7vh 0px white, 62vw 50vh 0px white, 65vw 35vh 2px white,
    64vw 10vh 0px white, 85vw 2vh 0px white, 92vw 40vh 0px white, 75vw 35vh 2px white, 90vw 10vh 0px white,
    80vw 33vh 2px white, 80vw 10vh 0px white, 95vw 2vh 2px white, 95vw 25vh 0px white, 65vw 25vh 0px white,
    85vw 20vh 0px white, 75vw 17vh 0px white, 25vw 25vh 0px white, 95vw 95vh 2px white, 1vw 90vh 0px white,
    2vw 80vh 2px white, 10vw 70vh 2px white, 12vw 65vh 0px white, 30vw 80vh 2px white, 16vw 85vh 2px white,
    14vw 50vh 0px white, 5vw 55vh 0px white, 20vw 58vh 2px white, 80vw 38vh 2px white, 90vw 90vh 0px white,
    90vw 95vh 2px white, 88vw 10vh 0px white, 80vw 10vh 2px white, 62vw 20vh 0px white, 60vw 15vh 2px white,
    70vw 7vh 0px white, 62vw 50vh 0px white, 65vw 35vh 2px white, 64vw 10vh 0px white, 85vw 55vh 0px white,
    92vw 60vh 0px white, 75vw 67vh 2px white, 60vw 80vh 0px white, 56vw 95vh 2px white, 75vw 70vh 0px white,
    70vw 96vh 2px white, 79vw 87vh 0px white, 80vw 78vh 0px white, 85vw 70vh 0px white, 90vw 80vh 0px white,
    25vw 25vh 0px white;
}

.container {
  font-size: 1.1rem;
  background-color: rgb(0, 0, 0);
  position: relative;
  width: 100%;
  padding-top: 100px;
  min-height: 90vh;
  overflow: hidden;
  background-image: radial-gradient(closest-side, rgb(102, 43, 32), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgb(68, 0, 46), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgb(0, 18, 46), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgb(55, 41, 91), rgba(170, 142, 245, 0));
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 0vmax 0vmax;
  background-repeat: no-repeat;
  animation: 5s movement linear infinite;
}

@keyframes movement {
  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax;
  }
  25% {
    background-size: 100vmax 100vmax, 110vmax 110vmax, 100vmax 100vmax, 90vmax 90vmax;
    background-position: -60vmax -90vmax, 50vmax -40vmax, 0vmax -20vmax, -40vmax -20vmax;
  }
  50% {
    background-size: 80vmax 80vmax, 80vmax 80vmax, 80vmax 80vmax, 60vmax 60vmax;
    background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0vmax, 20vmax 10vmax;
  }
  75% {
    background-size: 90vmax 90vmax, 60vmax 60vmax, 100vmax 100vmax, 90vmax 90vmax;
    background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0vmax, -10vmax 10vmax;
  }
}

.desc {
  width: 80%;
  text-align: left;
  margin-top: 5rem;
  margin-left: 8rem;
  position: relative;
  z-index: 999;
}
.desc h1 {
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
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
.desc p {
  width: 60%;
  line-height: 1.6rem;
}
.desc p span {
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
.pic {
  position: absolute;
  right: -10px;
  top: 200px;
  z-index: 1;
}
.earth {
  display: inline-block;
  right: 0;
  perspective: 400vmin;
  transform-style: preserve-3d;
  width: min(80vmin, 600px);
  height: min(80vmin, 600px);
  transform: rotate(23.5deg);
}

.earth::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background: url(/image/earth.jpg) repeat-x;
  filter: brightness(1.5);
  background-size: cover;
  border-radius: 50%;
  box-shadow: -150px -20px 100px 10px rgba(0, 0, 0, 0.9) inset, -10px 0px 30px -7px #fffcd959;
  animation: rotate 30s linear infinite;
}
.earth:hover::before {
  animation-play-state: paused;
}
@keyframes rotate {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 1200px 0px;
  }
}
</style>
