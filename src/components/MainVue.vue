<template>
  <div class="home-container">
    <div class="view">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <div class="nav-bottom" v-show="showbar">
      <router-link
        v-for="(item,index) in tabbarArray"
        :key="index"
        :to="item.link"
        tag="span"
        replace
      >
        <div class="item-box" @click="clickTabbar(index)" :selected="selected==index">
          <div class="icon" v-show="index_selseted==index? false:true">
            <img :src="item.icon" alt />
          </div>
          <div class="icon" v-show="index_selseted==index? true:false">
            <img :src="item.icon_active" alt />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
export default {
  name: "main-vue",
  data() {
    return {
      showbar: true,
      title: "",
      actived: false,
      index_selseted:2,
      tabbarArray: [
        {
          active: true,
          label: "龙虎榜",
          link: "/winnerslist",
          icon: require("../assets/image/main/lhb.png"),
          icon_active: require("../assets/image/main/lhb-active.png")
        },
        {
          active: false,
          label: "执法概况",
          link: "/treatmentsituation",
          icon: require("../assets/image/main/zfgk.png"),
          icon_active: require("../assets/image/main/zfgk-active.png")
        },
        {
          active: false,
          label: "系统首页",
          link: "/homepage",
          icon: require("../assets/image/main/xtsy.png"),
          icon_active: require("../assets/image/main/xtsy-active.png")
        },
        {
          active: false,
          label: "执法校正",
          link: "/lawenforcementcorrection",
          icon: require("../assets/image/main/zfjz.png"),
          icon_active: require("../assets/image/main/zfjz-active.png")
        },
        {
          active: false,
          label: "学习强警",
          link: "/stronglearning",
          icon: require("../assets/image/main/xxqj.png"),
          icon_active: require("../assets/image/main/xxqj-active.png")
        }
      ]
    };
  },

  watch: {
    $route() {
      let path = this.$route.path;
      this.changeRouter(path);
    }
  },
  methods: {
         ...mapActions(['changetabIndex']),
    clickTabbar(index) {
      this.index_selseted = index;
    },
    changeRouter(path) {
      this.index_selseted = this.tabbarArray.findIndex(
        item => item.link == path
      );
    }
  }
};
</script>

<style scoped>
.nav-bottom {
  width: 95%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  bottom: 0;
  z-index: 100;
}
.icon {
  width: 1.7rem;
  width: 1.7rem;
  margin: 0 auto;
  display: inline-block;
}
.item-box {
  width: 20%;
  height: 100%;
  text-align: center;
  display: inline-block;
}
.item-box img {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0.1rem;
}
.nav-bottom > div:not(:first-child) {
}
.home-container {
  width: 100%;
  height: 100%;
  background: #001147;
}
.view {
  height: 100%;

  background: #001147;
}
.active {
  color: #ec1e34;
}
</style>