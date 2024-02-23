<template>
  <div>
    <all-nav />

    <div class="top">
      <ul>
        <li class="xz">全部</li>
        <li>全部</li>
        <li>全部</li>
        <li>全部</li>
        <li>全部</li>
        <li>全部</li>
      </ul>

      <div class="input">
        <el-input
          clear="el"
          placeholder="服装名称|服装编号"
          prefix-icon="el-icon-search"
        ></el-input>
        <div class="text">搜索</div>
      </div>
    </div>

    <div class="cont">
      <div class="c" v-for="i in 4" :key="i">
        <div class="text">
          <span>服装名称:</span>
          简爱缎面抹胸
        </div>
        <div class="text">
          <span>服装名称:</span>
          简爱缎面抹胸
        </div>
        <div class="text">
          <span>服装名称:</span>
          简爱缎面抹胸
        </div>
        <!-- 轮播图 -->
        <div class="lbt">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(itme, index) in srcList"
                :key="index"
              >
                <!-- <img class="swiper_img" src="@/assets/img/jieh.jpg" alt=""> -->
                <el-image
                  class="img_box"
                  fit="cover"
                  :preview-src-list="srcList"
                  :src="itme"
                ></el-image>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>

    <footers/>
  </div>
</template>

<script>
import AllNav from "../components/AllNav.vue";
import "swiper/swiper.min.css";
import Swiper from "swiper";
import Footers from '../components/Footers.vue';
export default {
  components: { AllNav, Footers },
  data() {
    return {
      srcList: [
        "https://gd-hbimg.huaban.com/1791e3706d832dda3c5c23090402976731f5e9f013a868-kifPax_fw240webp",
        "https://gd-hbimg.huaban.com/f84f5d5f98e1593d57a21ec7e8d162f923388a31a179-oCqOBP_fw240webp",
        "https://gd-hbimg.huaban.com/1791e3706d832dda3c5c23090402976731f5e9f013a868-kifPax_fw240webp",
        "https://gd-hbimg.huaban.com/f84f5d5f98e1593d57a21ec7e8d162f923388a31a179-oCqOBP_fw240webp",
      ],
    };
  },
  mounted() {
    new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  methods: {},
};
</script>

<style scoped lang="less">
.top {
  height: 45px;
  background-color: rgba(238, 238, 238, 1);
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    li {
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      border-bottom: 3px solid transparent;

      &.xz {
        color: #00b890;
        border-bottom: 2px solid #00b890;
      }
    }
  }
  .input::v-deep {
    display: flex;
    align-items: center;
    .el,
    input {
      width: 296px;
      height: 30px;
      border-radius: 20px;
    }
    .el-input__prefix {
      transform: translateY(-4px);
    }
    .text {
      width: 35px;
      
      margin-left: 16px;
      // height: 20px;
      font-size: 14px;
      color: rgba(65, 80, 88, 1);
    }
  }
}

.cont {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #fff;
  padding-top: 20px;
  padding-bottom: 30px;
  .c {
    width: 557px;
    height: 302px;
    border-radius: 5px;
    border: 1px solid rgba(65, 80, 88, 1);
    margin: 0 43px;
    margin-bottom: 20px;
    background-color: rgba(249, 249, 249, 1);
    padding: 10px;
    .text {
      color: rgba(65, 80, 88, 1);
      font-size: 16px;
      margin-bottom: 10px;
      height: 24px;
      line-height: 24px;
      span {
        font-weight: bold;
        color: rgba(65, 80, 88, 1);
        font-size: 16px;
      }
    }

    // 轮播
    .lbt {
      height: 180px;
      .img_box {
        width: 180px;
        height: 180px;
        object-fit: cover;
      }
    }
  }
}
</style>