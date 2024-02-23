<template>
  <div class="account">
    <div class="box">
      <div>企业号YQ0001</div>
      <div>
        定义账号
        <div class="input">
          <el-input size="mini" placeholder="数字或字母"></el-input>
        </div>
      </div>
      <div>
        修改密码
        <div class="input">
          <el-input size="mini" placeholder="数字或字母"></el-input>
        </div>
      </div>
      <div>
        确定密码
        <div class="input">
          <el-input size="mini" placeholder="数字或字母"></el-input>
        </div>
      </div>
      <div>
        绑定手机
        <div class="input">
          <el-input size="mini" placeholder="数字"></el-input>
        </div>
        <span class="b">获取验证码</span>
      </div>
      <div>
        填验证码
        <div class="input">
          <el-input size="mini" placeholder="数字"></el-input>
        </div>
        <el-button type="success" size="mini">绑定</el-button>
      </div>
    </div>


    <div class="button">
      <el-button type="success" size="mini">绑定微信</el-button>
      <el-button type="success" size="mini">退出登录</el-button>
      <el-button type="success" size="mini">切换账号</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.account {
  font-size: 14px;
  .box{
    padding: 15px;
    border-bottom: 1px solid #ccc;
    .input{
      width: 180px;
      margin-right: 8px;
      margin-left: 5px;
    }
    .b{
      font-weight: bold;
    }
    >div{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

  }
  .button::v-deep{
    padding: 15px;
    .el-button{
      margin-right: 30px;
    }
  }
}
</style>