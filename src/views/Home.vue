<template>
  <div class="home">
    <!-- header -->
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <h1>广州双色摄影工作室</h1>
    </header>
    <!-- nav & 轮播图 -->
    <div class="nav_lamp">
      <nav class="nav">
        <ul class="list" v-for="(nav, index) in navList" :key="index">
          <li>
            <a
              @click="$router.push(nav.path)"
              :class="index == '0' ? 'pitch' : ''"
              >{{ nav.title }}</a
            >
            <i v-if="nav.subNav" class="subnav el-icon-arrow-right"></i>
            <div class="subnavs" v-if="nav.subNav">
              <ol>
                <li v-for="(subNav, index2) in nav.subNav" :key="index2">
                  <a href="">{{ subNav.title }}</a>
                </li>
              </ol>
            </div>
          </li>
        </ul>
      </nav>
      <div class="lamp">
        <el-carousel height="655px" :interval="3500" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <img class="lamp_img" src="@/assets/img/jieh.jpg" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- imgList -->
    <div class="img_list">
      <!-- 标题 -->
      <div class="title">
        <h2>100%真实客照</h2>
        <span></span>
        <p>广州双色摄影工作室说</p>
      </div>
      <!-- 图片列表 -->
      <div class="content">
        <ul>
          <li v-for="(itme, index) in 9" :key="index">
            <div class="top">
              <div class="new">
                <i class="el-icon-d-arrow-left"></i>
              </div>
              <div class="date">THIRD QUARTER</div>
              <div class="d">
                <i class="iconfont icon-caidan"></i>
              </div>
            </div>
            <div class="img">
              <img src="@/assets/img/jieh.jpg" alt="" />
            </div>
            <div class="t1">&lt; 简爱 &gt;</div>
            <div class="t2">STLEY：广州&bull;天河婚纱照个人</div>
          </li>
        </ul>
      </div>
    </div>

    <Footers />
  </div>
</template>

<script>
import Footers from "../components/Footers.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: { Footers },
  data() {
    return {
      navList2: [
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
        },
        {
          title: "套系活动",
        },
        {
          title: "在线选片",
        },
        {
          title: "个人中心",
        },
      ],
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
        {
          title: "在线选片",
          path: "/online_film_selection",
        },
        {
          title: "服装广场",
          path: "/clothing_square",
        },
        {
          title: "个人中心",
          path: "/personal_center",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
.home {
  header {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    .logo {
      width: 100px;
      height: 61px;
      margin-right: 12px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    h1 {
      color: var(--color);
      font-size: 18px;
      font-weight: normal;
      letter-spacing: 10px;
    }
  }
  .nav_lamp {
    margin-top: 10px;
    display: flex;
    .nav {
      width: 228px;
      height: 655px;
      background: #fff;
      ul.list {
        > li {
          position: relative;
          > a {
            display: block;
            height: 60px;
            line-height: 60px;
            padding-left: 15px;
            &.pitch {
              background: #eeeeee;
              color: #30c2a3;
            }
            &:active {
              background: #eeeeee;
              color: #30c2a3;
            }
          }
          &:hover {
            div.subnavs {
              display: block;
            }
          }
          i.subnav {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-weight: bold;
            font-size: 12px;
          }
          div.subnavs {
            display: none;
            position: absolute;
            right: -150px;
            padding-left: 5px;
            top: -100%;
            z-index: 9;
            width: 150px;
            ol {
              border-radius: 3px;
              box-shadow: 0 0 3px #ccc;
              background: #fff;
              li {
                padding-left: 15px;
                a {
                  display: block;
                  padding: 8px 0;
                }
              }
            }
          }
        }
      }
    }
    .lamp::v-deep {
      width: 1212px;
      height: 655px;
      .el-carousel__arrow {
        // background: #fff;
        width: 100px;
        height: 100px;
        border: 8px solid rgba(249, 249, 249, 0.6);
        background: transparent;
        i {
          color: rgba(249, 249, 249, 0.6);
          font-size: 80px;
          font-weight: bold;
        }
      }
      .el-carousel__button {
        border-radius: 50%;
        width: 8px;
        height: 8px;
      }
      .is-active {
        button {
          background: #000;
        }
      }
      .lamp_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .img_list {
    padding-top: 50px;
    padding-bottom: 40px;
    background: #fff;
    .title {
      margin-bottom: 30px;
      h2 {
        color: rgba(65, 80, 88, 1);
        font-size: 72px;
        text-align: center;
        font-weight: normal;
        height: 105px;
        line-height: 105px;
      }
      span {
        display: block;
        height: 1px;
        width: 531px;
        background: #415058;
        margin: auto;
      }
      p {
        color: #cecece;
        text-align: center;
        letter-spacing: 30px;
        padding-left: 33px;
        margin-top: 10px;
      }
    }
    .content {
      padding: 20px 7px;
      background: #fff;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 469px;
          height: 390px;
          background-color: rgba(249, 249, 249, 1);
          cursor: pointer;
          margin-bottom: 25px;
          &:hover {
            box-shadow: 0 0 8px #ccc;
            border-radius: 5px;
          }
          .top {
            width: 100%;
            height: 50px;
            background-color: rgba(238, 238, 238, 1);
            line-height: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            .new {
              i {
                font-size: 20px;
                color: #101010;
              }
            }
            .date {
              font-size: 18px;
            }
            .d {
              i {
                font-size: 22px;
                color: #415058;
              }
            }
          }
          .img {
            width: 449px;
            height: 230px;
            margin: auto;
            margin-top: 10px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .t1 {
            font-size: 20px;
            color: rgba(16, 16, 16, 1);
            text-align: center;
            margin-top: 35px;
          }
          .t2 {
            font-size: 14px;
            color: rgba(206, 206, 206, 1);
            text-align: center;
            margin-top: 8px;
          }
        }
      }
    }
  }
}
</style>
