<template>
  <div class="news">
    <h1>最新消息</h1>
    <Card class="card" style="width:60vw">
      <div class="inner-card" style="text-align:center">
        <img src="../assets/images/cny thumbnail.jpg" />
        <div class="card-body">
          <h5 class="card-title">運動抽紅包</h5>
          <p class="card-text">
            牛年大吉，過年大魚大肉後來運動甩開罪惡吧，2/17-19入場即能得到抽獎卷一張，最大獎將得到3000元現金紅包。
          </p>
          <p class="card-text">
            <small class="text-muted">2021-2-15</small>
          </p>
        </div>
      </div>
    </Card>
    <Card class="card" style="width:60vw">
      <div class="inner-card" style="text-align:center">
        <img src="../assets/images/2021 thumbnail.jpg" />
        <div class="card-body">
          <h5 class="card-title">元旦假期場館照常開放</h5>
          <p class="card-text">
            Happy New Year!
            新的一年要繼續保持運動健身的好習慣，2021第一天的第一「健」事從勁
            健身開始。
          </p>
          <p class="card-text">
            <small class="text-muted">2020-12-29</small>
          </p>
        </div>
      </div>
    </Card>
    <Card class="card" style="width:60vw">
      <div class="inner-card" style="text-align:center">
        <img src="../assets/images/covid thumbnail.jpg" />
        <div class="card-body">
          <h5 class="card-title">防疫政策</h5>
          <p class="card-text">
            配合秋冬防疫政策，109/12/1起，進場需配戴口罩，並保持社交距離。
          </p>
          <p class="card-text">
            <small class="text-muted">2020-11-25</small>
          </p>
        </div>
      </div>
    </Card>
    <Card class="card" style="width:60vw">
      <div class="inner-card" style="text-align:center">
        <img src="../assets/images/november.jpg" />
        <div class="card-body">
          <h5 class="card-title">開課啦</h5>
          <p class="card-text">11-12月團體課程開課了，敬請報名參加。</p>
          <p class="card-text">
            <small class="text-muted">2020-10-23</small>
          </p>
        </div>
      </div>
    </Card>
    <Card class="card" style="width:60vw">
      <div class="inner-card" style="text-align:center">
        <img src="../assets/images/treadmill.jpg" />
        <div class="card-body">
          <h5 class="card-title">消毒作業營業時間調整</h5>
          <p class="card-text">
            本場館將在10/15(四)上午進行消毒清潔工作，故當日營業時間從14:00開始。
          </p>
          <p class="card-text">
            <small class="text-muted">2020-10-07</small>
          </p>
        </div>
      </div>
    </Card>
    <Card class="card" style="width:60vw">
      <div class="inner-card" style="text-align:center">
        <img src="../assets/images/bodybuilder thumbnail.jpg" />
        <div class="card-body">
          <h5 class="card-title">健美比賽開跑</h5>
          <p class="card-text">
            是時候展現你各位堅實的身材了，即日起開始報名到9/16，比賽日期10/24，現場將由專業評審進行評分，第一名將有8,000元獎金，趕快報名吧。
          </p>
          <p class="card-text">
            <small class="text-muted">2020-09-05</small>
          </p>
        </div>
      </div>
    </Card>
    <Card class="card" style="width:60vw">
      <div class="inner-card" style="text-align:center">
        <img src="../assets/images/september.png" />
        <div class="card-body">
          <h5 class="card-title">開課啦</h5>
          <p class="card-text">9-10月團體課程開課了，敬請報名參加。</p>
          <p class="card-text">
            <small class="text-muted">2020-08-22</small>
          </p>
        </div>
      </div>
    </Card>
    <Card class="card" style="width:60vw">
      <div class="inner-card" style="text-align:center">
        <img src="../assets/images/sale thumbnail.jpg" />
        <div class="card-body">
          <h5 class="card-title">暑期學生優惠</h5>
          <p class="card-text">
            想在開學時擁有煥然一新的身材嗎? 即日起憑學生證報名享月費85折
          </p>
          <p class="card-text">
            <small class="text-muted">2020-07-01</small>
          </p>
        </div>
      </div>
    </Card>
    <BackTop></BackTop>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.news {
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
.card {
  margin: 1rem;
}
.card .inner-card {
  display: flex;
}
.card .inner-card img {
  width: 250px;
}
.card-body {
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.card-body h5 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
.card-body p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: rgb(43, 43, 43);
}
@media screen and (max-width: 768px) {
  .card {
    margin: 1rem 0rem;
    width: 85%;
  }
  .card .inner-card {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .card .inner-card img {
    width: 100%;
  }
}
</style>
