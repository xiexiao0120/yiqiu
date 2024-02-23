<template>
  <div class="subject">
    <table class="table">
      <tr>
        <td class="ba">女方</td>
        <td class="ba color">王泽</td>
        <td></td>
        <td class="ba">男方</td>
        <td class="ba color">顾伦</td>
        <td></td>
        <td>创建</td>
        <td>杨静云</td>
      </tr>
      <tr>
        <td>订单编号</td>
        <td>YQ20230223</td>
        <td>创建时间</td>
        <td>2023-03-25 23:32</td>
        <td>拍摄时间</td>
        <td>2023-02-19</td>
        <td>选片日期</td>
        <td>2022-05-14</td>
      </tr>
      <tr>
        <td>摄影师</td>
        <td>李书易</td>
        <td>化妆师</td>
        <td>周乐心</td>
        <td>修图师</td>
        <td>2023-02-19</td>
        <td>选片师</td>
        <td>2022-05-14</td>
      </tr>
    </table>
    <table class="table table2">
      <tr>
        <td>保底</td>
        <td>李书易</td>
        <td>实选</td>
        <td>周乐心</td>
        <td>套系金额</td>
        <td>2023-02-19</td>
        <td>加选金额</td>
        <td>2022-05-14</td>
      </tr>
    </table>

    <ul class="select">
      <li class="xzl">查看原片</li>
      <li>查看已选</li>
      <li>查看精修</li>
      <li>下载原片</li>
      <li>下载已选</li>
      <li>下载精修</li>
    </ul>

    <ul class="img_box">
      <li v-for="i in 9" :key="i">
        <img src="@/assets/img/jieh.jpg" alt="" />
      </li>
    </ul>

    <footers/>
  </div>
</template>

<script>
import Footers from '../../components/Footers.vue';
export default {
  components: {Footers},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.subject {
  background: #fff;
  padding-top: 20px;
}
// table Color
@border_color: rgba(206, 206, 206, 1);
.table {
  margin: auto;
  border-color: #ccc;
  border-spacing: 0;
  border: 1px solid @border_color;

  tr {
    &:nth-last-child(1) {
      td {
        border-bottom: none;
      }
    }
    &:nth-child(1) {
      td {
        &:nth-child(4) {
          font-weight: bold;
        }
        &:nth-child(5) {
          font-weight: normal;
        }
        &.ba {
          background: rgba(238, 238, 238, 1);
        }
        &.color {
          color: rgba(0, 184, 144, 1);
        }
      }
    }
    td {
      width: 150px;
      height: 48px;
      text-align: center;
      font-size: 18px;
      border-right: 1px solid @border_color;
      border-bottom: 1px solid @border_color;
      &:nth-last-child(1) {
        border-right: none;
      }
      &:nth-child(2n + 1) {
        font-weight: bold;
      }
    }
  }
}
.table2 {
  margin-top: 20px;
}

.select {
  width: 1200px + 2;
  height: 48px;
  margin: auto;
  display: flex;
  border: 1px solid @border_color;
  border-top: none;
  line-height: 46px;

  li {
    flex: 1;
    text-align: center;
    border-right: 1px solid @border_color;
    &:nth-last-child(1) {
      border: none;
    }
    font-size: 18px;
    cursor: pointer;
    &.xzl {
      background-color: #00b890;
      color: #fff;
    }
  }
}
.img_box {
  width: 1200px;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 365px;
    height: 445px;
    border-radius: 5px;
    border: 1px solid rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);
    padding: 5px;
    margin-top: 20px;
    img {
      width: 355px;
      height: 435px;
      border-radius: 5px;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>