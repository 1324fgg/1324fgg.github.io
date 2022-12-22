<template>
  <div class="container" :style="animationTime" @click="front">
    <div :class="flipped ? 'back back-flip' : 'back'">{{ desc }}</div>
    <div :class="flipped ? 'front front-flip' : 'front'" :style="backgroundStyle">
      <img src="/svg/back.svg" class="icon" @click.stop="back" />
      <span class="desc">{{ name }}</span>
      <button class="learn-more" @click="showPop">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">了解更多</span>
      </button>
    </div>
  </div>
  <div v-show="!remove" :class="show ? 'overlay show' : 'overlay'" @touchmove.prevent @click.stop="hidePop"></div>
  <div v-show="!remove" :class="show ? 'pop-up show' : 'pop-up'">
    <img :src="cover" />
    <div class="intro">
      <div v-html="intro1"></div>
      <div v-html="intro2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlipCard',
  props: {
    desc: String,
    name: String,
    cover: String,
    intro1: String,
    intro2: String,
    time: String,
  },
  data() {
    return {
      flipped: true,
      show: false,
      remove: true,
    };
  },
  computed: {
    backgroundStyle() {
      return "background-image: url('" + this.cover + "')";
    },
    animationTime() {
      return '--time: ' + this.time;
    },
  },
  methods: {
    front() {
      this.flipped = false;
    },
    back() {
      this.flipped = true;
    },
    showPop() {
      this.remove = false;
      setTimeout(() => {
        this.show = true;
      }, 100);
    },
    hidePop() {
      setTimeout(() => {
        this.remove = true;
      }, 500);
      this.show = false;
    },
  },
};
</script>

<style scoped>
@property --rotate {
  syntax: '<angle>';
  initial-value: 132deg;
  inherits: false;
}
* {
  box-sizing: border-box;
}
.container {
  width: 12rem;
  height: 16rem;
  margin: 1rem 2rem;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
}
.container::after {
  position: absolute;
  content: '';
  top: 10px;
  left: 10px;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  filter: blur(calc(15rem / 6));
  background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
  animation: spin var(--time) linear infinite;
}
@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
.back,
.front {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  position: absolute;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: 0.5s ease-out;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.front {
  background-size: cover;
  background-position: 50% 50%;
  transform: rotateY(0deg);
  cursor: auto;
  flex-direction: column;
  justify-content: flex-end;
}
.front::before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1rem;
  z-index: -1;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.1) 10%, rgb(10, 10, 10));
}
.back {
  background-color: #191c29;
  transform: rotateY(-180deg);
}
.front-flip {
  transform: rotateY(180deg);
}
.back-flip {
  transform: rotateY(0deg);
}
.front .icon {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  cursor: pointer;
}

.front .desc {
  font-size: 1.3rem;
  margin: 1rem 0;
}

button {
  position: relative;
  display: inline-block;
  border: 0;
  background: transparent;
  padding: 0;
}

button.learn-more {
  width: 8rem;
  height: auto;
}

button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 1.8rem;
  height: 1.8rem;
  background: #fff;
  border-radius: 1.625rem;
}

button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: rgb(15, 15, 15);
}

button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.15rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: '';
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid rgb(15, 15, 15);
  border-right: 0.125rem solid rgb(15, 15, 15);
  transform: rotate(45deg);
}

button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.3rem 0;
  margin: 0 0 0 1.85rem;
  color: #fff;
  font-weight: 700;
}

button:hover .circle {
  width: 100%;
}

button:hover .circle .icon.arrow {
  background: rgb(15, 15, 15);
  transform: translate(1rem, 0);
}

button:hover .button-text {
  color: rgb(15, 15, 15);
}

.pop-up {
  z-index: 2;
  width: 35rem;
  height: 25rem;
  padding: 1rem;
  border: 5px solid #f5f5f5;
  border-radius: 20px 20px 20px 0;
  background: #f8efe1;
  background: linear-gradient(#f8efe1 0%, #f1f3c5 100%);
  position: fixed;
  top: 35%;
  opacity: 0;
  transition: 0.3s ease-out;
  text-align: left;
  display: flex;
}
.pop-up.show {
  opacity: 1;
  top: 30%;
}
.pop-up img {
  height: 100%;
}
.pop-up .intro {
  display: inline-block;
  width: 50%;
  color: #000;
  line-height: 1.5rem;
  font-size: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: opacity 0.5s ease-out;
}
.overlay.show {
  opacity: 1;
}
</style>
