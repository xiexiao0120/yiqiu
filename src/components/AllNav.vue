<template>
  <header>
    <h1 class="logo">
      <a href="/">
        <img src="@/assets/logo.png" alt="" />
        广州双色摄影工作室
      </a>
    </h1>
    <nav>
      <ul>
        <li v-for="(itme, index) in navList" :key="index">
          <a
            :class="$route.matched[0].path == itme.path ? 'xzl' : ''"
            @click="goPush(itme.path)"
            >{{ itme.title}}</a
          >
          <ol v-if="itme.subNav">
            <li v-for="(nav2, index2) in itme.subNav" :key="index2">
              <a :class="index2 == 0?'subxzl':''" class="text" href="">{{ nav2.title }}</a>
            </li>
          </ol>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "首页",
          path: "/",
        },
        {
          title: "新品推荐",
          path: "/new_arrivals",
        },
        {
          title: "风格系列",
          path: "/style_series",
          subNav: [
            {
              title: "莫奈花园",
            },
            {
              title: "唯美韩式",
            },
            {
              title: "时尚都市",
            },
            {
              title: "浪漫法式",
            },
            {
              title: "时尚中式",
            },
          ],
        },
        {
          title: "真实客照",
          path: "/real_guest_photo",
        },
        {
          title: "套系活动",
          path: "/chip_select",
        },
        // {
        //   title: "在线选片",
        //   path: "/online_film_selection",
        // },
        // {
        //   title: "服装广场",
        //   path: "/clothing_square",
        // },
        {
          title: "个人中心",
          path: "/personal_center",
        },
      ],
    };
  },
  computed: {
  },
  methods:{
    // 跳转页面
    goPush(path){
      if(this.$route.matched[0].path == path) return
      this.$router.push(path)
    }
  }
};
</script>

<style scoped lang="less">
header {
  width: 100%;
  height: 100px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 25px;
  padding-left: 25px;
  box-shadow: 0px 2px 6px rgba(238, 238, 238, 100%);
  position: sticky;
  top: 0;
  z-index: 99;
  .logo {
    margin: 0;
    height: 100%;
    a {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 18px;
      img {
        width: 100px;
        height: 61px;
        margin-right: 5px;
        object-fit: cover;
      }
    }
  }
  nav {
    height: 70px;

    > ul {
      display: flex;
      > li {
        position: relative;
        > a {
          display: block;
          padding: 0 30px;
          line-height: 70px;
          &.xzl {
            background: #eeeeee;
            color: #30c2a3;
            border-bottom: 2px solid #13c448;
          }
        }
        &:hover {
          ol {
            display: block;
          }
        }
        ol {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          box-shadow: 0 0 5px #ccc;
          border-radius: 3px;
          li {
            a {
              display: block;
              padding: 15px;
              width: 150px;
              &.subxzl {
                background: #eeeeee;
                color: #30c2a3;
              }
            }
          }
        }
      }
    }
  }
}
</style>