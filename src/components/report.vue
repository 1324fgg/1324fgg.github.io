<template>
  <div id="container">
    <div id="background">
      <div id="title">
        <p>此外,中国航天还点满"科技树", 从一无所有发展出火星探测, 探月与深空探测, 对地观测系统与北斗导航系统四大领域</p>
        <p></p>
      </div>
      <div id="field">
        <div class="card">
          <div class="photo">
            <img src="/image/hxtc.webp" alt="" style="" />
          </div>
          <h1>火星探测</h1>
          <p>
            我国首次火星探测任务于2016年正式批复立项，计划通过一次任务实现火星环绕、着陆和巡视，对火星进行全球性、综合性的环绕探测，在火星表面开展区域巡视探测。天问一号探测器由环绕器和着陆巡视器组成，着陆巡视器包括“祝融号”火星车及进入舱。2021年5月15日7时18分，天问一号着陆巡视器成功着陆火星。这是我国首次实现地外行星着陆，使我国成为第二个成功着陆火星的国家。
          </p>
        </div>

        <div class="card">
          <div class="photo">
            <img src="/image/skty.webp" alt="" />
          </div>
          <h1>探月与深空探测</h1>
          <p>
            中国探月工程规划为“绕、落、回”三期。探月工程一期的任务是实现环绕月球探测。探月工程二期的任务是实现月面软着陆和自动巡视勘察。探月工程三期的任务是实现无人采样返回，于2011年立项。
          </p>
        </div>
        <div class="card">
          <div class="photo">
            <img src="/image/ddgc.webp" alt="" />
          </div>
          <h1>对地观测系统</h1>
          <p>
            中国正在建设基于卫星、平流层飞艇和飞机的高分辨率对地观测系统，完善相应地面系统，建立数据与应用中心。该系统与其它观测手段结合，将形成全天候、全天时、全球覆盖的对地观测能力，到2020年，建成先进的陆地、大气、海洋对地观测系统，为现代农业、减灾、资源环境、公共安全等重大领域提供服务和决策支撑
          </p>
        </div>
        <div class="card">
          <div class="photo">
            <img src="/image/bd.webp" alt="" />
          </div>
          <h1>北斗导航系统</h1>
          <p>
            北斗卫星导航系统(以下简称北斗系统)是中国着眼于国家安全和经济社会发展需要，自主建设、独立运行的卫星导航系统，是为全球用户提供全天候、全天时、高精度的定位、导航和授时服务的国家重要空间基础设施。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Report',
};
</script>

<style scoped>
#background {
  font-size: 1.1rem;
  font-family: 'KaiTi', 'STXingkai';
  background-color: rgb(0, 0, 0);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
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
#title {
  position: absolute;
  top: 5%;
  left: 3%;
  font-size: 1.5rem;
  display: inline-block;
}
#field {
  padding-top: 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#field .card {
  width: 40vw;
  height: 35vh;
}
#field .card:hover .photo {
  top: 0;
  width: 40vw;
  height: 0vh;
  border-radius: 10px;
}
#field .photo::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
}
#field .card h1 {
  font-size: 2rem;
  top: 40%;
}
#field .card:hover h1 {
  top: 0;
}

#field .card p {
  overflow-y: auto;
  padding-top: 7%;
}

/* 定义滚动条样式 */

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px rgba(180, 180, 180, 0.5);
  border-radius: 10px;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0px rgba(180, 180, 180, 0.5);
}
</style>
