<template>
  <div class="home">
    <!-- <div id="top">
      <h1>愛上健身 從此刻開始</h1>
      <img src="../assets/images/cover.jpg" alt="" />
    </div> -->
    <Carousel
      id="carousel"
      autoplay
      :autoplay-speed="setting.autoplaySpeed"
      v-model="value3"
      loop
    >
      <CarouselItem class="item">
        <div class="demo-carousel">
          <h1>愛上健身 從此刻開始</h1>

          <img src="../assets/images/cover.jpg" alt="" />
        </div>
      </CarouselItem>
      <CarouselItem class="item">
        <div class="demo-carousel">
          <h1>打造完美體態</h1>
          <img src="../assets/images/cover2.jpg" alt="" />
        </div>
      </CarouselItem>
      <CarouselItem class="item">
        <div class="demo-carousel">
          <h1>全方位器材</h1>
          <img src="../assets/images/cover3.jpg" alt="" />
        </div>
      </CarouselItem>
    </Carousel>

    <div class="wrapper" id="bottom">
      <Row class="row">
        <Col class="col" :xs="24" :sm="24" :md="12" :lg="12">
          <div class="desc" id="desc1">
            <h3>頂級認證器材</h3>
          </div>
        </Col>
        <Col class="col" :xs="24" :sm="24" :md="12" :lg="12">
          <div class="pic" id="pic1">
            <img src="../assets/images/equip.jpg" alt="" />
          </div>
        </Col>
      </Row>

      <Row class="row" id="change-order">
        <Col class="col change-order" :xs="24" :sm="24" :md="12" :lg="12">
          <div class="pic" id="pic2">
            <img src="../assets/images/dumbbell.jpg" alt="" />
          </div>
        </Col>
        <Col class="col change-order" :xs="24" :sm="24" :md="12" :lg="12">
          <div class="desc" id="desc2">
            <h3>合格寬敞場地</h3>
          </div>
        </Col>
      </Row>

      <Row class="row ">
        <Col class="col" :xs="24" :sm="24" :md="12" :lg="12">
          <div class="desc" id="desc3">
            <h3>健康安全無虞</h3>
          </div>
        </Col>
        <Col class="col" :xs="24" :sm="24" :md="12" :lg="12">
          <div class="pic" id="pic3">
            <img src="../assets/images/lifting.jpg" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 5000,
        dots: "inside",
      },
    };
  },
};
</script>

<style scoped>
#carousel {
  width: 100%;
  height: 80vh;
}

.demo-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.demo-carousel h1 {
  z-index: 1;
  font-size: 4rem;
  position: absolute;
  color: white;
  display: inline-block;
  margin: 1rem;
}

.demo-carousel img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}

#bottom {
  margin-top: 5rem;
}

#bottom .row .col {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.desc {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.desc h3 {
  display: inline-block;
  background-color: #f00000;
  padding: 1rem 1.5rem;
  color: white;
  font-size: 2.5rem;
  cursor: default;
}

.pic {
  position: relative;
  overflow: hidden;
  object-fit: cover;
  width: 400px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.pic img {
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
}

@media screen and (max-width: 768px) {
  .demo-carousel h1 {
    font-size: 3rem;
    display: inline-block;
  }
  #bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .row {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .change-order:first-child {
    order: 2;
  }
  .change-order:nth-child(2) {
    order: 1;
  }
}
</style>
