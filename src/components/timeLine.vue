<template>
  <div id="container">
    <div id="background">
      <div id="poetry">
        <h1>赴九天，问苍穹</h1>
        <h1>坐地日行八万里,巡天遥看一千河</h1>
        <h1>且看中国航天52年辉煌成就</h1>
      </div>
      <div id="timeline" class="entries">
        <div class="entry card">
          <div class="title">
            <h1>1970年4月24日</h1>
          </div>
          <div class="body">
            <p>
              1970年4月24日,我国成功发射了<em>第一颗人造地球卫星</em>———“东方红”1号，成为世界上第五个独立自主研制和发射人造地球卫星的国家。
            </p>
          </div>
          <div class="photo">
            <img src="/image/dfh.webp" />
          </div>
        </div>
        <div class="entry card">
          <div class="title">
            <h1>1992年9月21日</h1>
          </div>
          <div class="body">
            <p style="line-height: 1.6em">
              1992年9月21日,中国<em>载人航天工程</em>正式立项,代号为<em>“921工程”</em>。根据规划，工程将按“三步走”发展战略实施,逐步实现我国的航天梦想.
            </p>
          </div>
          <div class="photo">
            <img src="/image/sbz.webp" />
          </div>
        </div>
        <div class="entry card">
          <div class="title">
            <h1>1999年11月20日</h1>
          </div>
          <div class="body">
            <p>
              1999年11月20日，我国<em>第一艘无人试验飞船“神舟一号”</em>，在中国酒泉卫星发射中心新建成的航天发射场发射升空。当天凌晨，100多米高的发射塔架各层平台陆续打开，露出了运载火箭和“神舟一号”试验飞船的雄姿。
            </p>
          </div>
          <div class="photo">
            <img src="/image/sz1.webp" />
          </div>
        </div>
        <div class="entry card">
          <div class="title">
            <h1>2003年10月15日</h1>
          </div>
          <div class="body">
            <p>
              2003年10月15日9时整，中国<em>第一艘载人飞船神舟5号</em>从酒泉卫星发射中心顺利飞向太空，中国首位航天员杨利伟成为浩瀚太空的第一位中国访客，实现了中国人千年的飞天梦想。这也标志着中国成为世界上第3个能够独立开展载人航天活动的国家。
            </p>
          </div>
          <div class="photo">
            <img src="/image/zg.webp" />
          </div>
        </div>
        <div class="entry card">
          <div class="title">
            <h1>2008年9月25日</h1>
          </div>
          <div class="body">
            <p>
              神舟七号搭载三名中国航天员：翟志刚、刘伯明和景海鹏，展开近乎完美的太空之旅，实现了中国人漫步苍穹的飞天梦想。五载光阴，三度跨越，从神舟五号到神舟七号，从中国人首次问天到首次漫步苍穹，中国成为<em>世界上第三个掌握太空出舱技术的国家</em>。
            </p>
          </div>
          <div class="photo">
            <img src="/image/zgr.webp" />
          </div>
        </div>
        <div class="entry card">
          <div class="title">
            <h1>2016年10月19日</h1>
          </div>
          <div class="body">
            <p>
              2016年10月19日3时31分，神舟十一号载人飞船与天宫二号空间实验室成功实现自动交会对接。与神舟飞船开展的<em>首次交会对接</em>。
            </p>
          </div>
          <div class="photo">
            <img src="/image/dj.webp" />
          </div>
        </div>
        <div class="entry card">
          <div class="title">
            <h1>2021年6月17日</h1>
          </div>
          <div class="body">
            <p>
              2021年6月17日18时48分，航天员聂海胜、刘伯明、汤洪波先后进入天和核心舱，标志着中国人<em>首次进入自己的空间站</em>。后续，航天员乘组将按计划开展相关工作。
            </p>
          </div>
          <div class="photo">
            <img src="/image/htz.webp" />
          </div>
        </div>
        <div class="entry card">
          <div class="title">
            <h1>2022年10月31日</h1>
          </div>
          <div class="body">
            <p></p>
            <p>
              2022年,中国将实施6次飞行任务,<em>完成我国空间站在轨建造</em>,在10月的最后一天，中国空间站建设任务的最后一个模块——“梦天”实验室被成功送入轨道，距离今年年底完成空间站建设又近了一步。
            </p>
          </div>
          <div class="photo">
            <img src="/image/mt.webp" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
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
};
</script>

<style scoped>
#background {
  font-size: 1.1rem;
  background-color: rgb(0, 0, 0);
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 100px;
  height: 550vh;
  overflow: hidden;
  background-image: radial-gradient(closest-side, rgb(102, 43, 32), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgb(68, 0, 46), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgb(0, 18, 46), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgb(55, 41, 91), rgba(170, 142, 245, 0)),
    radial-gradient(closest-side, rgb(67, 67, 0), rgba(248, 192, 147, 0));
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 0vmax 0vmax;
  background-repeat: repeat;
  animation: 5s movement linear infinite;
}

#poetry {
  font-family: 'KaiTi', 'STXingkai';
  margin-bottom: 100px;
}

#poetry h1 {
  background-image: linear-gradient(
    60deg,
    #0022ff -10.39%,
    #5179fe -7.38%,
    #a5edb6 30.59%,
    #fae85a 46.06%,
    #fdac3e 62.61%,
    #ff7d31 75.82%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

em {
  font-style: normal;
  font-size: larger;
  background-image: linear-gradient(
    60deg,
    #0022ff -10.39%,
    #5179fe -7.38%,
    #a5edb6 30.59%,
    #fae85a 46.06%,
    #fdac3e 62.61%,
    #ff7d31 75.82%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.entries {
  width: calc(100% - 160px);
  margin: auto;
  position: relative;
  left: -5px;
}

.entries .entry {
  width: calc(50% - 80px);
  float: left;
  padding: 20px;
  clear: both;
  background-color: rgba(117, 135, 138, 0.8);
  border-radius: 10px;
}

.entries .entry:not(:first-child) {
  margin-top: -60px;
}

.entries .entry .title {
  font-family: 'KaiTi', 'STXingkai';
  margin-bottom: 12px;
  position: relative;
  color: #fff;
  z-index: 9999;
}
.entries .entry .body {
  color: white;
  font-family: 'KaiTi', 'STXingkai';
  margin-top: 10%;
}
#timeline .card p {
  font-size: 1.5rem;
}
#timeline .card .photo::before {
  background: linear-gradient(to left, transparent 50%, #222);
}

.entries .entry:nth-child(2n) {
  float: right;
}
#timeline .card img {
  border-radius: 10px;
}
.entries .card:nth-child(2n + 1):hover .photo {
  top: 0;
  right: 0;
  width: 0;
  height: 100%;
  border-radius: 0px;
  transition: all 1s ease;
}
.entries .card:nth-child(2n):hover .photo {
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-radius: 0px;
  transition: all 1s ease;
}
#timeline .card .title {
  top: 40%;
  width: 100%;
  transition: 0.5s;
}
#timeline .card .title h1 {
  top: 40%;
  font-size: 2rem;
  transition: 0.5s;
}
#timeline .card:hover .title {
  top: 5%;
  transition: 0.5s;
}
</style>
