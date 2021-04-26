<template>
  <div class="reserve">
    <h1>場地預約</h1>
    <div class="current">
      <div>
        <h3>目前館內人數</h3>
        <div class="number">
          <p>18人</p>
        </div>
      </div>
      <div>
        <h3>已預約人數</h3>
        <div class="number">
        
          <p id="reserved"  style="color: #547d16">{{reserved}}人</p>
        </div>
      </div>
      <div>
        <h3>可預約人數</h3>
        <div class="number">
          <p id="available" style="color: #0b5774">{{available}}人</p>
        </div>
      </div>
    </div>

    <Button
     
      @click="success"
      v-on:click="change"
      id="button"
      shape="circle"
      type="info"
      >我要預約</Button
    >
  </div>
</template>
<script>
export default {
  data() {
        return {
            reserved: 9,
            available: 13
        }},
  methods: {
    success(nodesc) {
      this.$Notice.success({
        title: "預約成功!",
        desc: nodesc
          ? ""
          : "Here is the notification description. Here is the notification description. ",
      });
    },
    change: function() {
      const button=document.getElementById("button")
     button.innerText = "預約成功";
      button.disabled = true
      button.style.cursor="default"
      button.style.backgroundClip="blue"
      this.available--;
      this.reserved++
    },
  },
};
</script>

<style scoped>
.reserve {
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
.current {
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.current div {
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 2rem 1rem 2rem;
}
.current div h3 {
  font-size: 1.75rem;
  font-weight: 550;
}

.number {
  margin-top: 0.5rem;
  background-color: rgb(238, 238, 238);
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 3rem 0rem;
}

#button {
  margin-top: 5rem;
  width: 150px;
  height: 85px;
  font-size: 1.5rem;
}
#button:disabled{
  background-color: rgb(183, 224, 226);
  color:white;
}
</style>
