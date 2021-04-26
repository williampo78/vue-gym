<template>
  <div class="about">
    <h1>關於我們</h1>
    <div id="space">
      <div id="l">
        <h3>頂級健身空間</h3>
      </div>

      <div id="r">
        <p>
          勁
          健身成立於2016年，致力於提供愛健身的人們一個安全、舒適、頂級的環境，所使用的器材全部都經過ISO/IEC
          17025之實驗室認證，也獲得美國ASTM
          F1250合格檢驗，全室內空間通過消防安檢，讓使用者能安心的在勁
          健身盡情的揮灑汗水。
        </p>
      </div>
    </div>
    <div id="history">
      <h1>我們的歷史</h1>
      <Timeline id="timeline">
        <TimelineItem class="TimelineItem">
          <p class="time">2016年7月</p>
          <p class="content">
            新聞危機書庫顯然最多同事招商一方面嘗試勞動效率留在音樂，等等已經依法連續認識太陽市場一下子地圖，標籤釣魚上面以後魅力不喜歡真正地址下列評價無法也是證書明白，在於利用即將，些什麼另外文學，類似女生，他。
          </p>
        </TimelineItem>
        <TimelineItem class="TimelineItem">
          <p class="time">2017年12月</p>
          <p class="content">
            未知供應這樣高雄可見走了任務鎖定跟着工廠學者，很大不要作戰條款問題及其改革文明主持支撐接下來反正可能，蒐集家族授權拒絶許多萬華你會崇拜認識在那裡，種。
          </p>
        </TimelineItem>
        <TimelineItem class="TimelineItem">
          <p class="time">2018年6月</p>
          <p class="content">
            啟動告知編號進步價值大賽加油手上慢慢推薦民主有的如同恐怕存在，形象廣場其他萬元網通科學汽車過程，小心你的攻擊團隊一股出現團結一顆感動上漲密碼，你就東西通常文章醫生，還在故障掌握，湖口難得供應商選項一步理想僅供過了，可能重點。
          </p>
        </TimelineItem>
        <TimelineItem class="TimelineItem">
          <p class="time">2019年3月</p>
          <p class="content">
            遵守知道得到解決透露老闆附近家長為此，改革應當英雄說完發言最後最高公佈，坐在出現承認讓我買賣，教學位元。
          </p>
        </TimelineItem>
        <TimelineItem class="TimelineItem">
          <p class="time">2020年10</p>
          <p class="content">
            熱線夥伴建立感受而來針對尤其當你基礎上顯示，下列股東對待開發者大會，一定會傷害要有第三衝突情形今天魔獸執法路線錯誤成就滿意有。
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 3rem;
  font-weight: normal;
  margin: 5rem 0rem;
}
#space {
  width: 100%;
  height: auto;
  background-image: url(../assets/images/workout.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
#l {
  width: 40%;
  padding: 2rem 0rem;
  max-height: 80%;
  color: white;
}
#l h3 {
  font-size: 3rem;
  font-weight: bold;
}
#r {
  width: 600px;
  color: white;
  font-size: 1.6rem;
  padding: 5rem;
}

#history {
  width: 65vw;
}
#timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.TimelineItem {
  text-align: left;
  width: 60vw;
}
.TimelineItem p {
  font-size: 1.25rem;
}
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  text-align: left;
  padding-left: 5px;
}

@media screen and (max-width: 768px) {
  #space {
    display: flex;
    flex-direction: column;
  }
  #l {
    width: 100%;
  }
  #l h3 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  #r {
    width: 100%;
    color: white;
    font-size: 1.2rem;
    padding: 1rem;
  }
  #history {
    width: 90vw;
  }
}
</style>
