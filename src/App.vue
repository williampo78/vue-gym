<template>
  <div id="app">
    <div id="nav">
      <section id="left">
        <router-link to="/"
          ><img src="./assets/images/logo.png" alt=""
        /></router-link>
      </section>

      <section id="right" class="navRight">
        <router-link to="/" class="active">首頁</router-link>
        <router-link :to="{name:'About'}">關於我們</router-link>
        <router-link :to="{name:'News'}">最新消息</router-link>
        <router-link :to="{name:'Charge'}">消費方式</router-link>
        <router-link :to="{name:'Reserve'}">場地預約</router-link>
        <router-link :to="{name:'Login'}">登入</router-link>
        <a href="javascript:void(0);" class="icon" v-on:click="RWD">
          <img src="../src/assets/images/menu.png" alt="" />
        </a>
      </section>
    </div>

    <router-view />

    <footer id="footer">
      <section id="f-l">
        <img src="./assets/images/logo.png" alt="" />
      </section>
      <section id="f-r">
        <div id="f-t">
          <ul>
            <li><router-link :to="{name:'About'}">關於我們</router-link></li>
            <li><router-link :to="{name:'Reserve'}">場地預約</router-link></li>
            <li><router-link :to="{name:'News'}">最新消息</router-link></li>
            <li><a href="#">粉絲專頁</a></li>
          </ul>
        </div>
        <div id="f-b">
          <p>地址:台北市中正區健身路23號</p>
          <p>電話:(02)1234-5678</p>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    RWD: function() {
      var x = document.getElementById("right");
      if (x.className === "navRight") {
        x.className += " responsive";
      } else {
        x.className = "navRight";
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Noto Sans TC", sans-serif, Microsoft JhengHei;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  background-color: #f00000;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
}
#left {
  margin: 0rem 3rem;
  padding-left: 2rem;
}
#left img {
  margin: 0.5rem 0rem;
  width: 40px;
}

#right {
  padding-right: 5rem;
  display: flex;
  align-items: center;
}
#nav #right a {
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
  margin: 0rem 0.75rem;
}

#nav #right a.router-link-exact-active {
  color: white;
}

#nav #right a:hover:after {
  content: "";
  height: 2px;
  background: rgb(255, 255, 255);
  display: block;
}

#nav #right a.router-link-exact-active:after {
  content: "";
  height: 2px;
  background: rgb(255, 255, 255);
  display: block;
}
.icon {
  display: none;
}

#footer {
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  color: white;
  background-color: #f00000;
}

#f-l {
  padding: 1rem;
}
#f-l img {
  width: 80px;
}

#f-r {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}
#f-t ul {
  display: flex;
  list-style-type: none;
}
#f-t ul li {
  margin: 1rem;
}
#f-t ul li a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}
#f-b p {
  line-height: 2.5rem;
  font-size: 1rem;
}

@media screen and (max-width: 768px) {
  #right {
    display: flex;
    flex-direction: column;
  }
  #right a {
    display: none;
  }
  #right a.icon {
    float: inline-end;
    display: block;
  }
  a.icon:hover:after {
    display: none;
  }
  .icon img {
    width: 30px;
  }

  #f-l {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #f-r {
    display: flex;
    flex-direction: column;
    margin-left: 0rem;
  }
  #f-t {
    padding: 1rem;
  }
  #f-t ul {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  #f-t ul li {
    padding: 0rem;
    line-height: 0.2rem;
  }
}

@media screen and (max-width: 768px) {
  #right.responsive {
    position: relative;
  }
  #right.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  #right.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
