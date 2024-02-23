<template>
  <div class="tie">
    <header>
      <div class="ret">
        <i class="el-icon-arrow-left"></i>
      </div>
      <h1>人气主题</h1>
      <p>广州纯色摄影工作室</p>
    </header>

    <div class="d1">
      <!-- 走马灯 -->
      <div class="zmd">
        <el-carousel height="409px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img src="@/assets/img/jieh.jpg" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="right">
        <div class="t1">￥4999</div>
        <div class="t2">定金:￥100</div>
        <a href="" class="a1"> 支付定金 </a>
        <a href="" class="a2"> 全额支付 </a>
      </div>
    </div>

    <div class="d2">
      <ul>
        <li v-for="i in 8" :key="i">
          <i class="iconfont icon-house-full"></i>
        </li>
        <li v-for="i in 8" :key="i">内景</li>
        <li v-for="i in 8" :key="i">5</li>
      </ul>
    </div>

    <div class="d3">
      <!--  -->
      <h2>拍摄特色</h2>
      <div class="content">
        <div class="con">
          <span>拍摄风格|</span>
          <p>
            “Like all forms of design, visual design is about problem-solving,
            not about personal preference or unsupported opinion.” — Bob
            Baxley“像其他设计一样，视觉设计也是解决问题，不是个人喜好。”
          </p>
        </div>
        <div class="con">
          <span>拍摄风格|</span>
          <p>
            “Like all forms of design, visual design is about problem-solving,
            not about personal preference or unsupported opinion.” — Bob
            Baxley“像其他设计一样，视觉设计也是解决问题，不是个人喜好。”
          </p>
        </div>
      </div>

      <!--  -->
      <h2>拍摄特色</h2>
      <div class="content">
        <div class="con">
          <span>拍摄风格|</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            neque sapiente, aut optio autem officiis libero, mollitia laborum ad
            voluptate sed praesentium laboriosam. Deserunt voluptas aliquam
            cumque totam fugiat sint.
          </p>
        </div>
        <div class="con">
          <span>场景风格|</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            neque sapiente, aut optio autem officiis libero, mollitia laborum ad
            voluptate sed praesentium laboriosam. Deserunt voluptas aliquam
            cumque totam fugiat sint.
          </p>
        </div>
      </div>

      <!--  -->
      <h2>成品说明</h2>
      <div class="content">
        <div class="con">
          <span>拍摄风格|</span>
          <p>
            61cm x 43cm 定制克拉相册一本 <br />
            41cm x 30cm 定制克拉相册一本<br />
            41cm x 30cm 定制克拉相册一本
          </p>
        </div>
      </div>
      <h2>套系介绍</h2>
      <div class="con_img">
        <img v-for="i in 5" :key="i" src="~@/assets/img/lol.jpg" alt="" />
      </div>
      <h2>购买须知</h2>
      <div class="content">
        <div class="con">
          <span>有效期|</span>
          <p>购买之日起300天内有效</p>
        </div>
      </div>
    </div>

    <Footers />
  </div>
</template>

<script>
import Footers from "../components/Footers.vue";
export default {
  components: { Footers },
};
</script>

<style scoped lang="less">
.tie {
  background: #fff;
}
header {
  width: 100%;
  height: 100px;
  position: relative;
  box-shadow: 0 1px 3px #ccc;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 99;
  .ret {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background: #05c697;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 29px;
    left: 40px;
    i {
      font-size: 26px;
      color: #fff;
      font-weight: bold;
    }
  }
  h1 {
    text-align: center;
    color: rgba(65, 80, 88, 1);
    font-size: 36px;
    padding-top: 15px;
    margin: 0;
  }
  p {
    text-align: center;
    color: rgba(65, 80, 88, 1);
    font-size: 12px;
    margin: 0;
    margin-top: 5px;
  }
}

.d1 {
  width: 1200px;
  height: 429px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  border-radius: 10px;
  .zmd::v-deep {
    width: 767px;
    border-radius: 5px;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .el-carousel__button {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .el-carousel__arrow {
      display: none;
    }
  }
  .right {
    .t1 {
      width: 300px;
      height: 100px;
      line-height: 100px;
      font-weight: bold;
      border-radius: 10px;
      background-color: rgba(0, 184, 144, 1);
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: center;
      border: 1px solid rgba(0, 184, 144, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 48px;
    }
    .t2 {
      width: 100%;
      height: 29px;
      color: rgba(16, 16, 16, 1);
      font-size: 20px;
      text-align: center;
      margin-top: 10px;
    }
    a {
      display: block;
      width: 300px;
      height: 58px;
      line-height: 58px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 1);
      color: rgba(65, 80, 88, 1);
      font-size: 18px;
      text-align: center;
      border: 1px solid rgba(65, 80, 88, 1);
    }
    .a1 {
      margin-top: 134px;
    }
    .a2 {
      margin-top: 20px;
      color: rgba(0, 184, 144, 1);
      border: 1px solid rgba(0, 184, 144, 1);
    }
  }
}

.d2 {
  margin: 0 120px;
  margin-top: 30px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 150px;
      height: 80px;
      border: 1px solid #dddddd;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      i {
        font-size: 38px;
        color: #fc761d;
      }
    }
  }
}

.d3 {
  width: 1198px;
  margin: auto;
  margin-top: 31px;
  border: 1px solid #ccc;
  h2 {
    height: 100px;
    line-height: 100px;
    background-color: rgba(238, 238, 238, 1);
    font-size: 28px;
    color: rgba(0, 184, 144, 1);
    padding-left: 40px;
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 3px;
      height: 60px;
      background: rgba(0, 184, 144, 1);
      position: absolute;
      top: 20px;
      left: 27px;
    }
  }
  .content {
    margin-bottom: 10px;
    .con {
      display: flex;
      padding: 10px 30px;
      // margin-bottom: 10px;
      span {
        display: block;
        width: 84px;
        color: rgba(65, 80, 88, 1);
        font-size: 16px;
      }
      p {
        flex: 1;
        color: rgba(16, 16, 16, 1);
        font-size: 16px;
        line-height: 22px;
        margin: 0;
      }
    }
  }
  .con_img {
    margin-top: 10px;
    margin-bottom: 20px;
    img {
      width: 1140px;
      display: block;
      margin: auto;
    }
  }
}
</style>