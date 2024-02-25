<template>
  <div class="subject">
    <header>
      <div class="ret">
        <i class="el-icon-arrow-left"></i>
      </div>
      <h1>《简爱》</h1>
      <p>广州纯色摄影工作室</p>
    </header>

    <div class="content_img">
      <img v-for="i in 3" :key="i" src="@/assets/img/loginbg.png" alt="" />
    </div>

    <!-- 猜你喜欢 -->
    <div class="cnxh">
      <div class="tit">猜你喜欢</div>
      <ul class="img-list">
        <li v-for="i in 5" :key="i">
          <img src="@/assets/img/jieh.jpg" alt="" />
          <div class="tit1">塞纳·迷梦</div>
          <div class="tit2">STLEY：广州·天河婚纱 个人</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.subject {
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
.content_img {
  width: 1200px;
  margin: auto;
  margin-top: 20px;
  img {
    width: 100%;
    display: block;
    // height: 749px;
  }
}

.cnxh {
  margin-top: 50px;
  border-top: 1px dashed #ccc;
  padding-bottom: 50px;
  .tit {
    color: rgba(65, 80, 88, 1);
    font-size: 20px;
    text-align: center;
    margin: auto;
    margin-top: -12px;
    width: 120px;

    background: #fff;
  }
  .img-list {
    display: flex;
    justify-content: center;
    li {
      width: 254px;
      height: 186px;
      border-radius: 8px;
      padding: 10px;
      box-shadow: 0 0 3px #ccc;
      margin: 0 5px;
      margin-top: 34px;
      img {
        width: 234px;
        height: 120px;
        object-fit: cover;
      }
      .tit1 {
        color: rgba(0, 184, 144, 1);
        font-size: 14px;
        text-align: center;
        margin-top: 10px;
      }
      .tit2 {
        color: rgba(206, 206, 206, 1);
        font-size: 10px;
        text-align: center;
        margin-top: 5px;
      }
    }
  }
}
</style>