<template>
  <div>
    

    <div class="cont">
      <div class="login">
        <h2>广州双色摄影工作室</h2>
        <span></span>
        <!-- <div class="text">在线选片平台</div> -->
        <div class="icon">
          <div>
            <i class="iconfont icon-lock-full"></i>
          </div>
          <div>
            <i class="iconfont icon-shouji"></i>
          </div>
          <div>
            <i class="iconfont icon-weixin"></i>
          </div>
        </div>
        <div class="form">
          <el-input class="el_input" placeholder="手机号"></el-input>
          <el-input class="el_input" placeholder="选片密码"></el-input>
          <el-button class="button">开始选片</el-button>
        </div>
      </div>

      <footer>
        <span>一秋选片技术支持</span>
        <a href="">粤ICP备2021004476号</a>
      </footer>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="less">
.cont {
  width: 100%;
  height: 924px;
  background: url(~@/assets/img/lol.jpg) no-repeat center;
  background-size: cover;
  padding-top: 259px;
  .login {
    width: 360px;
    height: 306px;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    margin: auto;
    h2 {
      width: 270px;
      height: 45px;
      color: rgba(0, 184, 144, 1);
      font-size: 30px;
      text-align: center;
      font-family: "SourceHanSansSC-regular";
      font-weight: normal;
    }
    span {
      display: block;
      width: 270px;
      height: 1px;
      background: rgba(249, 249, 249, 1);
      margin: 5px;
    }
    .icon {
      display: flex;
      margin-top: 7px;
      div {
        width: 35px;
        height: 35px;
        background: #fc761d;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 12.5px;
        i {
          color: #fff;
        }
        &:nth-child(2) {
          background: #257AE7;
        }
        &:nth-child(3) {
          background: #28C445;
          i {
            font-size: 18px;
          }
        }
      }
    }
    .form::v-deep {
      width: 300px;
      margin-top: 7px;
      input {
        height: 44px;
        margin-bottom: 20px;
        font-size: 14px;
      }
      .button {
        width: 100%;
        font-size: 18px;
        background-color: rgba(0, 184, 144, 1);
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
        border: none;
        span {
          color: #fff;
        }
      }
    }
  }

  footer {
    // background: #fff;
    margin-top: 259px;
    // padding: 50px 0 20px;
    span,
    a {
      display: block;
      text-align: center;
      padding-bottom: 10px;
      letter-spacing: 5px;
      color: rgba(206, 206, 206, 1);
      font-size: 14px;
    }
  }
}
</style>