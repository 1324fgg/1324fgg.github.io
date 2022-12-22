<template>
  <div id="navi">
    <router-link to="/" class="home" @click="atHome">
      <img src="/svg/home.svg" />
    </router-link>
    <router-link to="/history" class="item" active-class="active" @mouseenter="nowAt($event)" @mouseleave="leave"
      >中国航空事业简史</router-link
    >
    <router-link to="/knowledge" class="item" active-class="active" @mouseenter="nowAt($event)" @mouseleave="leave"
      >航空知识科普</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'NaviBar',
  data() {
    return {
      left: '200px',
      width: '100px',
      show: 0,
    };
  },
  methods: {
    atHome() {
      this.show = 0;
    },
    leave() {
      this.show = 0;
    },
    nowAt(e) {
      const { target } = e;
      this.show = 100;
      this.left = target.offsetLeft - 5 + 'px';
      this.width = target.offsetWidth + 10 + 'px';
    },
  },
};
</script>

<style scoped>
* {
  font-family: SimHei;
  font-size: 1.1rem;
}
#navi {
  background-color: transparent;
  padding: 1rem 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
}
#navi .home {
  position: absolute;
  left: 1rem;
}
#navi .home img {
  height: 1.5rem;
  padding: 0.3rem;
  transition: all 0.5s;
}
#navi .home img:hover {
  border-radius: 50%;
  background-color: #f0c866;
}
#navi .item {
  color: rgba(245, 245, 245, 0.8);
  margin: 0 1rem;
  padding: 0.3rem;
  transition: 0.5s;
}
#navi .active {
  color: #f0c866;
}
#navi::before {
  position: absolute;
  content: '';
  background-color: #32345a;
  border-radius: 24px;
  opacity: v-bind(show);
  left: v-bind(left);
  width: v-bind(width);
  height: 2rem;
  z-index: -1;
  transition: all 0.4s ease-in-out;
}
</style>
