<template>
  <div class="">
    <all-nav />

    <ul class="content">
      <li v-for="itme in 6" :key="itme">
        <div class="img">
          <img src="@/assets/img/jieh.jpg" alt="" />
        </div>
        <div class="rq">「人气主题」</div>
        <div class="price">¥4999</div>
        <div class="d1">4服|4造|80底片</div>
        <div class="ss">广州双色摄影工作室</div>
      </li>
    </ul>

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
.content {
  background: #fff;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
    justify-content: space-between;
    
  li {
    width: 450px;
    height: 800px;
    background-color: rgba(249, 249, 249, 1);
    padding-top: 60px;
    cursor: pointer;
    margin-bottom: 30px;
    &:hover{
      background: #e1f3ef;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .8);
    }
    .img {
      width: 210px;
      height: 210px;
      border-radius: 50%;
      overflow: hidden;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        // object-position: center;
      }
    }
    .rq {
      width: 318px;
      height: 70px;
      margin: auto;
      color: #00b890;
      font-size: 48px;
      text-align: center;
      margin-top: 60px;
    }
    .price {
      width: 200px;
      height: 66px;
      line-height: 66px;
      border: #00b890;
      border-radius: 50px;
      text-align: center;
      font-size: 36px;
      border: 1px solid rgba(0, 184, 144, 1);
      color: rgba(0, 184, 144, 1);
      margin: auto;
      margin-top: 60px;
    }
    .d1 {
      width: 162px;
      height: 29px;
      color: rgba(16, 16, 16, 1);
      font-size: 20px;
      margin: auto;
      margin-top: 30px;
    }
    .ss {
      width: 171px;
      height: 20px;
      color: rgba(65, 80, 88, 1);
      font-size: 14px;
      margin: auto;
      margin-top: 182px;
    }
  }
}
</style>