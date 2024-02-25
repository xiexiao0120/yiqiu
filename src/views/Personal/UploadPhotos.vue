<template>
  <div class="upload">
    <div class="top">
      <div class="button">
        <div class="xzl">上传底片</div>
        <div>上传初修</div>
        <div>上传精修</div>
      </div>
      <!-- 进度条 -->
      <el-progress class="pro" :percentage="50" color="#00B890"></el-progress>
    </div>

    <div class="content">
      <div class="img" v-for="i in 9" :key="i">
        <img src="@/assets/img/loginbg.png" alt="" />
      </div>

      <footers class="footers"></footers>
    </div>
  </div>
</template>

<script>
import Footers from "../../components/Footers.vue";
export default {
  components: { Footers },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.upload {
  background: #fff;
  padding-top: 20px;
}
.top {
  width: 1200px;
  height: 100px;
  margin: auto;
  border-radius: 5px;
  border: 1px solid rgba(65, 80, 88, 1);
  padding: 10px;
  .button {
    display: flex;
    width: 1180px;
    height: 40px;
    margin: auto;
    margin-bottom: 18px;
    border-radius: 4px;
    border: 1px solid rgba(65, 80, 88, 1);
    div {
      flex: 1;
      text-align: center;
      line-height: 38px;
      border-right: 1px solid rgba(65, 80, 88, 1);
      color: #00b890;
      cursor: pointer;
      &:nth-last-child(1) {
        border: none;
      }
      &.xzl {
        background: #00b890;
        color: #fff;
      }
    }
  }
}

.content {
  width: 1200px;
  height: 772px;
  margin: auto;
  margin-top: 20px;
  border: 1px solid rgba(65, 80, 88, 1);
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: #ccc;
    border-radius: 20px;
  }
  .img {
    width: 355px;
    height: 435px;

    margin-bottom: 40px;
    padding: 2px;
    border: 1px solid #eee;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
}

.footers {
  margin-top: 0;
  width: 100%;
}
</style>