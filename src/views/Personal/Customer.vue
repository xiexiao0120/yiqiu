<template>
  <div class="customer">
    <div class="left">
      <div class="name">李天泽</div>
      <ul class="nav">
        <li class="xz">全部[10]</li>
        <li>已付[10]</li>
        <li>未付[10]</li>
      </ul>
      <div class="button">
        <button>绑定微信</button>
        <button class="jie" v-if="false">解绑微信</button>
        <button>退出登录</button>
      </div>
    </div>

    <div class="right">
      <div class="con" v-for="i in 3" :key="i">
        <div class="d">
          <span>拍摄门店:广州纯色摄影工作室</span>
          <span>摄影师:周乐心</span>
        </div>
        <ul class="u1">
          <li class="xz">下单</li>
          <li>支付</li>
          <li>拍摄</li>
          <li>修片</li>
          <li>交付</li>
          <span class="x"></span>
        </ul>
        <ul class="u2">
          <li class="xzx">继续支付</li>
          <li>选片</li>
          <li>底片</li>
          <li>精修</li>
          <li>查看订单</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.customer {
  display: flex;
  background: #fff;
}
.left {
  width: 200px;
  height: 924px;
  border-right: 1px solid rgba(187, 187, 187, 1);
  .name {
    color: rgba(65, 80, 88, 1);
    font-size: 28px;
    text-align: center;
    margin-top: 20px;
  }
  .nav {
    margin-top: 20px;
    font-size: 18px;
    li {
      padding-left: 20px;
      height: 188px/3;
      line-height: 188px/3;
      border-right: 2px solid #fff;
      cursor: pointer;
      &.xz {
        background: #eeeeee;
        color: #08b992;
        border-right: 2px solid #08b992;
      }
    }
  }
  .button {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      margin-bottom: 20px;
      cursor: pointer;
      width: 180px;
      height: 50px;
      border-radius: 4px;
      border: 1px solid rgba(65, 80, 88, 1);
      background-color: rgba(255, 255, 255, 1);
      color: rgba(65, 80, 88, 1);
      font-size: 16px;
      text-align: center;
      &.jie {
        color: #08b992;
        border-color: #08b992;
      }
    }
  }
}

.right {
  flex: 1;
  .con {
    width: 1200px;
    height: 210px;
    border-radius: 5px;
    border: 1px solid rgba(65, 80, 88, 1);
    margin: auto;
    margin-top: 20px;
    padding: 20px;
    .d {
      span {
        margin-right: 50px;
        color: rgba(65, 80, 88, 1);
        font-size: 16px;
      }
    }
    .u1,
    .u2 {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      position: relative;
      li {
        // cursor: pointer;
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: rgba(65, 80, 88, 1);
        font-size: 16px;
        border: 1px solid rgba(65, 80, 88, 1);
        border-radius: 25px;
        position: relative;
        background: #fff;
        z-index: 2;
        &.xz {
          background-color: rgba(0, 184, 144, 1);
          color: rgba(255, 255, 255, 1);
          border: none;
        }
      }
      span.x {
        display: block;
        position: absolute;
        z-index: 0;
        top: 25px;
        width: 100%;
        height: 1px;
        background-color: #415058;
      }
    }
    .u2 {
      margin-top: 30px;
      > li {
        width: 200px;
        height: 50px;
        border: 1px solid rgba(65, 80, 88, 1);
        border-radius: 4px;
        border-radius: 4px;
        cursor: pointer;
        &.xzx{
          border: 1px solid rgba(0, 184, 144, 1);
          color: rgba(0, 184, 144, 1);
        }
      }
    }
  }
}
</style>