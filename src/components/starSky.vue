<template>
  <div id="container">
    <canvas id="canvas"></canvas>
    <div id="info">
      <div id="title">
        <p>而辉煌成就的背后,是无数航天人的默默付出</p>
        <p>他们如群星闪耀,指引我们通向星星的路</p>
      </div>
      <div id="content">
        <div class="card">
          <div class="photo">
            <img src="/image/qsx.webp" />
          </div>
          <h1>钱学森</h1>
          <h2>中国航天之父, "两弹一星"元勋</h2>
        </div>
        <div class="card">
          <div class="photo">
            <img src="/image/rxm.webp" />
          </div>
          <h1>任新民</h1>
          <h2>长征系列火箭与我国通信卫星的奠基人, "两弹一星"元勋</h2>
        </div>
        <div class="card">
          <div class="photo">
            <img src="/image/tse.webp" />
          </div>
          <h1>屠守锷</h1>
          <h2>洲际导弹奠基人, "两弹一星"元勋</h2>
        </div>
        <div class="card">
          <div class="photo">
            <img src="/image/hwl.webp" />
          </div>
          <h1>黄纬禄</h1>
          <h2>"东风"系列与"巨浪"系列导弹奠基人, "两弹一星"元勋</h2>
        </div>
        <div class="card">
          <div class="photo">
            <img src="/image/lsn.webp" />
          </div>
          <h1>梁守槃</h1>
          <h2>中国海防导弹之父, "两弹一星"元勋</h2>
        </div>
      </div>
      <div id="jump">
        <svg
          t="1667478113134"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3878"
          width="64"
          height="64"
        >
          <path
            d="M560.96256 92.16c-119.28576 0-230.6048 50.18112-309.52448 136.6016a35.51232 35.51232 0 0 0 2.23744 50.1248 35.4048 35.4048 0 0 0 50.06336-2.24256c65.6384-71.86432 158.04416-113.52576 257.22368-113.52576 192.44544 0 348.45184 156.20096 348.45184 348.88192 0 192.68096-156.0064 348.8768-348.45184 348.8768-99.51744 0-192.21504-41.94304-257.87392-114.23744a35.4048 35.4048 0 0 0-50.05824-2.37568 35.51232 35.51232 0 0 0-2.37568 50.11968C329.60512 881.3056 441.27232 931.84 560.96256 931.84c231.58272 0 419.32288-187.97056 419.32288-419.84s-187.74016-419.84-419.328-419.84z"
            fill="#0067DC"
            p-id="3879"
          ></path>
          <path
            d="M465.40288 476.5184A35.456 35.456 0 0 1 500.8384 512a35.47648 35.47648 0 0 1-29.68576 35.01568l-5.74976 0.4608H81.5104A35.456 35.456 0 0 1 46.08 512a35.47648 35.47648 0 0 1 29.68576-35.01568l5.74976-0.4608h383.88736z"
            fill="#0067DC"
            p-id="3880"
          ></path>
          <path
            d="M605.312 495.06304a29.51168 29.51168 0 0 1 4.58752 37.97504l-3.38944 4.21376L474.7264 673.5872a29.5936 29.5936 0 0 1-41.8048 0.73216 29.51168 29.51168 0 0 1-4.08064-37.6064l3.34848-4.1472 110.85312-114.68288-109.66016-101.17632a29.51168 29.51168 0 0 1-4.8896-37.50912l3.25632-4.21888a29.60384 29.60384 0 0 1 37.56032-4.88448l4.224 3.2512 131.77856 121.72288z"
            fill="#0067DC"
            p-id="3881"
          ></path>
        </svg>
        <div id="jumpBtn" style="padding-left: 10px">
          <router-link to="/knowledge" style="color: #fff">跳转到航天知识</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarSky',
  mounted: function () {
    this.run();
  },
  methods: {
    run() {
      let context = document.getElementById('canvas');
      let ctx = context.getContext('2d');
      let w = document.documentElement.clientWidth;
      let h = document.documentElement.clientHeight;
      context.width = w;
      context.height = h * 1.2;
      let starPic;
      let num = 50;
      let stars = [];
      class StarObject {
        x;
        y;
        picNum;
        constructor() {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
          this.picNum = Math.floor(Math.random() * 7);
        }
        draw() {
          ctx.clearRect(this.x, this.y, 7, 7);
          ctx.drawImage(starPic, this.picNum * 7, 0, 7, 7, this.x, this.y, 7, 7);
        }
        update() {
          this.picNum = (this.picNum + 1) % 7;
        }
      }
      const init = () => {
        starPic = new Image();
        starPic.src = '/image/star.png';

        for (let i = 0; i < num; i++) {
          stars.push(new StarObject());
        }
        drawStars();
        setInterval(drawStars, 50);
      };
      window.requestAnimFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      const drawStars = () => {
        for (let i = 0; i < num; ++i) {
          // console.log(stars[i].x, stars[i].y);
          stars[i].update();
          stars[i].draw();
        }
      };
      init();
    },
    addTitle() {
      console.log('add title');
    },
  },
};
</script>

<style>
#canvas {
  font-size: 1.1rem;
  background-color: rgb(0, 0, 0);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  overflow: hidden;
  background-image: radial-gradient(closest-side, rgb(102, 43, 32), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgb(68, 0, 46), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgb(0, 18, 46), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgb(55, 41, 91), rgba(170, 142, 245, 0)),
    radial-gradient(closest-side, rgb(67, 67, 0), rgba(248, 192, 147, 0));
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 0vmax 0vmax;
  background-repeat: repeat;
}

#info {
  position: absolute;
  z-index: 9999;
  font-family: 'KaiTi', 'STXingkai';
}

#title {
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 1.5rem;
  display: inline-block;
}

#content {
  padding-top: 10%;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}

#jump {
  position: absolute;
  top: 100%;
  left: 40%;
  padding-bottom: 50px;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  position: relative;
  width: 12vw;
  height: 50vh;
  margin: 20px;
  background-color: rgba(117, 135, 138, 0.8);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.card .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .photo {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0%;
  overflow: hidden;
  transition: 0.5s;
}

.card .photo::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgb(70, 70, 70));
}

.card:hover .photo {
  top: 30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}

.card h1 {
  position: absolute;
  top: 370px;
  font-size: 1.5rem;
  transition: 0.5s;
}

.card:hover h1 {
  top: 170px;
}

.card h2 {
  margin-top: 220px;
  width: 100%;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.3); */
  font-size: 1rem;
  margin-bottom: 10px;
  padding-bottom: 15px;
}

.card p {
  width: 100%;
  font-size: 1rem;
  margin-bottom: 15px;
  line-height: 2rem;
  word-spacing: 1.8rem;
  text-align: left;
}

#jumpBtn {
  border-radius: 10px;
}

#jumpBtn:hover {
  background-color: #747bff95;
  transition: all 0.2s;
}
</style>
