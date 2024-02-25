<template>
  <div class="operation">
    <div class="title">广州双色摄影工作室 电子合同预览</div>
    <div class="date">订单日期: 2024-02-25</div>
    <div class="table">
      <table>
        <tr>
          <td>先生姓名</td>
          <td colspan="2"><input class="middle" /></td>
          <td>联系方式</td>
          <td colspan="2"><input class="middle" /></td>
        </tr>
        <tr>
          <td>微信</td>
          <td><input class="small" /></td>
          <td>套系名称</td>
          <td><input class="small" /></td>
          <td>套系金额</td>
          <td><input class="small" /></td>
        </tr>
        <tr>
          <td>定金</td>
          <td><input class="small" /></td>
          <td>余款</td>
          <td><input class="small" /></td>
          <td>保底</td>
          <td><input class="small" /></td>
        </tr>
        <tr>
          <td>入底</td>
          <td><input class="small" /></td>
          <td>入册</td>
          <td><input class="small" /></td>
          <td>精修</td>
          <td><input class="small" /></td>
        </tr>
        <tr>
          <td>物流地址</td>
          <td colspan="5"><input class="large" /></td>
        </tr>
        <tr>
          <td>门店地址</td>
          <td colspan="5"><input class="large" /></td>
        </tr>
        <tr>
          <td colspan="3">产品内容</td>
          <td colspan="3">说明</td>
        </tr>
        <tr style="min-height: 300px;">
          <td colspan="3"><textarea class="big" type="text" /></td>
          <td colspan="3"> 
            <textarea type="text" class="big" />       
          </td>
        </tr>
        <tr>
          <td>拍摄日期</td>
          <td><input class="small" /></td>
          <td>选片日期</td>
          <td><input class="small" /></td>
          <td>取件日期</td>
          <td><input class="small" /></td>
        </tr>
        <tr>
          <td>客人签字</td>
          <td colspan="2"><input class="middle" /></td>
          <td>门店签字</td>
          <td colspan="2"><input class="middle" /></td>
        </tr>
      </table>
    </div>
    <div class="bottom">
        <el-button size="small" type="primary">推送客户</el-button>
        <el-button size="small" type="primary">推送打印</el-button>
        <el-button size="small" type="primary">下载合同</el-button>
        <el-button size="small" type="primary">关闭预览</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped lang="less">
.operation {
    width: 900px;
  height: auto;
  margin-left: 40px;
  .title {
    font-size: 18px;
    text-align: center;
    margin: 30px 0;
  }
  .date {
    font-size: 14px;
    text-align: left;
    margin-bottom: 20px;
  }
}
table,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
td {
  text-align: center;
  width: 150px;
  height: 40px;
}
.small,.middle,.large{
  border: none;
  padding-left: 4px;
  height: 40px;
}
.small {
  width: 150px;
}
.middle{
    width: 300px;
}
.large{
    width: 750px;
}
.big{
    padding: 6px;
    width: 450px;
    height: 300px;
}
.bottom{
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>