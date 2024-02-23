<template>
  <div class="series">
    <all-nav />
    <!-- 风格藏馆 -->
    <div class="fgcg">
      <div>风格藏馆</div>
      <ul>
        <li class="xzla">全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
        <li>全部展示</li>
      </ul>
    </div>

    <div class="content">
      <ul>
        <li v-for="(itme, index) in 9" :key="index">
          <div class="top">
            <div class="new">
              <i class="iconfont icon-double-circle"></i>
            </div>
            <div class="date">2023-6</div>
            <div class="d">
              <i class="el-icon-error"></i>
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

    <Footers />
  </div>
</template>

<script>
import AllNav from "../components/AllNav.vue";
import Footers from "../components/Footers.vue";

export default {
  components: { AllNav, Footers },
};
</script>

<style scoped lang="less">
.series {
  .fgcg {
    display: flex;
    justify-content: space-between;
    background: #fff;
    > div {
      width: 100px;
      height: 29px;
      font-size: 20px;
      margin-left: 40px;
      margin-top: 17px;
      // font-weight: bold;
    }
    ul {
      width: 1250px;
      height: 32px;
      line-height: 32px;
      display: flex;
      margin-right: 40px;
      margin-top: 15px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(0, 184, 144, 1);
      li {
        flex: 1;
        text-align: center;
        border-right: 1px solid rgba(0, 184, 144, 1);
        cursor: pointer;
        &:nth-last-child(1) {
          border: none;
        }
        &.xzla {
          background: rgba(0, 184, 144, 1);
          color: #fff;
        }
      }
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
            transform: translateY(3px);
            i {
              font-size: 24px;
              color: #ff4150;
            }
          }
          .date {
            font-size: 18px;
          }
          .d {
            i {
              font-size: 26px;
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
</style>