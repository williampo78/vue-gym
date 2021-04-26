<template>
  <div id="charge">
    <h1>消費方式</h1>
    <div>
      <img src="../assets/images/charge.png" alt="" />
      <p>點此 <a href="/login"> 加入會員 </a> 開始你的健身生活！</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  font-size: 3rem;
  font-weight: normal;
  margin: 5rem 0rem;
}
#charge {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#charge div {
  width: 90vw;
}
#charge div img {
  width: 90%;
}
#charge div p {
  font-size: 1.2rem;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  #charge div img {
  width: 100%;
}
}
</style>
