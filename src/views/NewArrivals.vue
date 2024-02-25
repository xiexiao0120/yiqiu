<template>
  <div class="new_arrivals">
    <AllNav/>
    <div class="content">
      <ul>
        <li v-for="(itme, index) in 9" :key="index">
          <div class="top">
            <div class="new">
              <i class="iconfont icon-new"></i>
            </div>
            <div class="date">2023-6</div>
            <div class="d">
              <i class="iconfont icon-sandian"></i>
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
import Footers from "@/components/Footers.vue";
import AllNav from "@/components/AllNav.vue";
export default {
  components: {
    Footers,
    AllNav,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="less">
.new_arrivals {
  
  .content {
    width: 1440px;
    padding: 20px 7px;
    background: #fff;
    margin: 0 auto;
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
        &:hover{
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
            transform: translateY(5px);
            i {
              font-size: 36px;
              color: #00b890;
            }
          }
          .date {
            font-size: 18px;
          }
          .d {
            i {
              font-size: 15px;
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