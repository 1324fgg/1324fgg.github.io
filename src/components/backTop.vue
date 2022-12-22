<template>
  <div>
    <div id="backTop" @click="backTop"></div>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
    backTop() {
      const timer = setInterval(() => {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        let step = Math.floor(-top / 5);
        document.documentElement.scrollTop = document.body.scrollTop = top + step;
        if (top === 0) {
          clearInterval(timer);
        }
      }, 30);
      this.fly();
      this.blow();
    },
    fly() {
      setTimeout(() => {
        document.getElementById('backTop').className = 'move';
      }, 300);
      setTimeout(() => {
        document.getElementById('backTop').className = '';
      }, 2700);
    },
    blow() {
      let topPosiiton = -149;
      let count = 0;
      const blowtimer = setInterval(() => {
        topPosiiton += -149;
        count++;
        if (topPosiiton < -743) {
          topPosiiton = -149;
        }
        console.log(topPosiiton);
        document.getElementById('backTop').style = 'background-position: ' + topPosiiton + 'px 0px';
        if (count > 50) {
          document.getElementById('backTop').style = 'background-position: -149px 0px';
          clearInterval(blowtimer);
        }
      }, 50);
    },
  },
};
</script>

<style>
#backTop {
  position: fixed;
  right: 0;
  bottom: 0;
  background: url('../assets/rocket.png') -149px 0px no-repeat;
  width: 149px;
  height: 160px;
  cursor: pointer;
  z-index: 999999999;
  transform: translateY(0);
  transition: transform 0.5s;
}
#backTop:hover {
  transform: translateY(10px);
}
.move {
  animation: move 5s infinite;
}
@keyframes move {
  from {
    bottom: 0px;
  }

  to {
    bottom: 2000px;
  }
}
</style>
