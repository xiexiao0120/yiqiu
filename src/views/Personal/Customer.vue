<template>
  <div class="customer">
    <div class="left">
      <div class="name">李天泽</div>
      <ul class="nav">
        <li
          :class="tabIndex == index ? 'xz' : ''"
          v-for="(item, index) in tabList"
          :key="item.id"
          @click="handleTabchange(index)"
        >
          {{ item.name }}[0]
        </li>
      </ul>
      <div class="button">
        <button>退出登录</button>
      </div>
    </div>

    <div class="right">
      <div class="box">
        <div class="boxTop">
          <div class="topLeft">全额订单 ￥4999</div>
          <div class="topRight">申请退款</div>
        </div>
        <div class="boxMiddle">
          <div class="middleLeft">
            <img src="../../assets/img/jieh.jpg" alt="" />
          </div>
          <div class="middleRight">
            <div class="briefTop">
              <div class="brief">订单简要</div>
              <div class="brief">查看合同</div>
            </div>
            <div class="orderList">
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
            </div>
          </div>
        </div>
        <div class="step">
          <!-- 步骤条盒子 -->
          <div class="steps-box">
            <!-- 步骤条 -->
            <div
              class="Article-steps"
              :class="stepList.length <= activeIndex ? 'step-over' : ''"
            >
              
              <!-- 每步部分 -->
              <div style="display: flex;">
                <span
                class="step"
                v-for="(i, index) in stepList"
                :key="index"
                :class="
                  activeIndex == i.stepIndex || i.stepIndex <= activeIndex
                    ? 'step-active'
                    : 'step-start'
                "
              >
                <span
                  class="step-num"
                  :class="{ active: activeIndex + 1 === i.stepIndex }"
                >
                  <span
                    class="num"
                    :class="{ active: activeIndex + 1 === i.stepIndex }"
                    >{{ i.title }}</span
                  >
                </span>
                <div v-if="index!=4" class="line">
              </div>
              </span>
              </div> 
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomLeft">服务团队</div>
          <div class="bottomRight">
            <span class="span"> 选片 </span>
            <span class="span"> 下载底片 </span>
            <span class="span"> 下载精修 </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxTop">
          <div class="topLeft">全额订单 ￥4999</div>
          <div class="topRight">申请退款</div>
        </div>
        <div class="boxMiddle">
          <div class="middleLeft">
            <img src="../../assets/img/jieh.jpg" alt="" />
          </div>
          <div class="middleRight">
            <div class="briefTop">
              <div class="brief">订单简要</div>
              <div class="brief">查看合同</div>
            </div>
            <div class="orderList">
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
            </div>
          </div>
        </div>
        <div class="step">
          <!-- 步骤条盒子 -->
          <div class="steps-box">
            <!-- 步骤条 -->
            <div
              class="Article-steps"
              :class="stepList.length <= activeIndex ? 'step-over' : ''"
            >
              
              <!-- 每步部分 -->
              <div style="display: flex;">
                <span
                class="step"
                v-for="(i, index) in stepList"
                :key="index"
                :class="
                  activeIndex == i.stepIndex || i.stepIndex <= activeIndex
                    ? 'step-active'
                    : 'step-start'
                "
              >
                <span
                  class="step-num"
                  :class="{ active: activeIndex + 1 === i.stepIndex }"
                >
                  <span
                    class="num"
                    :class="{ active: activeIndex + 1 === i.stepIndex }"
                    >{{ i.title }}</span
                  >
                </span>
                <div v-if="index!=4" class="line">
              </div>
              </span>
              </div> 
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomLeft">服务团队</div>
          <div class="bottomRight">
            <span class="span"> 选片 </span>
            <span class="span"> 下载底片 </span>
            <span class="span"> 下载精修 </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxTop">
          <div class="topLeft">全额订单 ￥4999</div>
          <div class="topRight">申请退款</div>
        </div>
        <div class="boxMiddle">
          <div class="middleLeft">
            <img src="../../assets/img/jieh.jpg" alt="" />
          </div>
          <div class="middleRight">
            <div class="briefTop">
              <div class="brief">订单简要</div>
              <div class="brief">查看合同</div>
            </div>
            <div class="orderList">
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
            </div>
          </div>
        </div>
        <div class="step">
          <!-- 步骤条盒子 -->
          <div class="steps-box">
            <!-- 步骤条 -->
            <div
              class="Article-steps"
              :class="stepList.length <= activeIndex ? 'step-over' : ''"
            >
              
              <!-- 每步部分 -->
              <div style="display: flex;">
                <span
                class="step"
                v-for="(i, index) in stepList"
                :key="index"
                :class="
                  activeIndex == i.stepIndex || i.stepIndex <= activeIndex
                    ? 'step-active'
                    : 'step-start'
                "
              >
                <span
                  class="step-num"
                  :class="{ active: activeIndex + 1 === i.stepIndex }"
                >
                  <span
                    class="num"
                    :class="{ active: activeIndex + 1 === i.stepIndex }"
                    >{{ i.title }}</span
                  >
                </span>
                <div v-if="index!=4" class="line">
              </div>
              </span>
              </div> 
            </div>
          </div>
        </div>        
        <div class="bottom">
          <div class="bottomLeft">服务团队</div>
          <div class="bottomRight">
            <span class="span"> 选片 </span>
            <span class="span"> 下载底片 </span>
            <span class="span"> 下载精修 </span>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="boxTop">
          <div class="topLeft">全额订单 ￥4999</div>
          <div class="topRight">申请退款</div>
        </div>
        <div class="boxMiddle">
          <div class="middleLeft">
            <img src="../../assets/img/jieh.jpg" alt="" />
          </div>
          <div class="middleRight">
            <div class="briefTop">
              <div class="brief">订单简要</div>
              <div class="brief">查看合同</div>
            </div>
            <div class="orderList">
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
              <div class="list">内景X5</div>
            </div>
          </div>
        </div>
        <div class="step">
          <!-- 步骤条盒子 -->
          <div class="steps-box">
            <!-- 步骤条 -->
            <div
              class="Article-steps"
              :class="stepList.length <= activeIndex ? 'step-over' : ''"
            >
              
              <!-- 每步部分 -->
              <div style="display: flex;">
                <span
                class="step"
                v-for="(i, index) in stepList"
                :key="index"
                :class="
                  activeIndex == i.stepIndex || i.stepIndex <= activeIndex
                    ? 'step-active'
                    : 'step-start'
                "
              >
                <span
                  class="step-num"
                  :class="{ active: activeIndex + 1 === i.stepIndex }"
                >
                  <span
                    class="num"
                    :class="{ active: activeIndex + 1 === i.stepIndex }"
                    >{{ i.title }}</span
                  >
                </span>
                <div v-if="index!=4" class="line">
              </div>
              </span>
              </div> 
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomLeft">服务团队</div>
          <div class="bottomRight">
            <span class="span"> 选片 </span>
            <span class="span"> 下载底片 </span>
            <span class="span"> 下载精修 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        { id: 1, name: "全部" },
        { id: 2, name: "已付" },
        { id: 3, name: "未付" },
      ],
      tabIndex: 0,
      activeIndex: 2,
      //步骤条步数
      stepList: [
        {
          stepIndex: 1,
          title: "下单",
        },
        {
          stepIndex: 2,
          title: "排挡",
        },
        {
          stepIndex: 3,
          title: "拍摄",
        },
        {
          stepIndex: 4,
          title: "修片",
        },
        {
          stepIndex: 5,
          title: "交付",
        },
      ],
    };
  },
  methods: {
    handleTabchange(index) {
      console.log("hfdjfh", index);
      this.tabIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.customer {
  width: 1440px;
  margin: 0 auto;
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
  .box {
    display: inline-block;
    width: 402px;
    min-height: 210px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: 10px 6px 16px 6px;
    .boxTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      border-bottom: 1px dashed #ccc;
      padding: 5px;
      .topLeft {
        font-size: 16px;
        color: #00b890;
      }
      .topRight {
        color: #919b9e;
        font-size: 14px;
      }
    }
    .boxMiddle {
      display: flex;
      height: 100px;
      border-bottom: 1px dashed #ccc;
      padding: 5px;
      .middleLeft {
        img {
          height: 80px;
          width: 120px;
          border-radius: 4px;
        }
      }
      .middleRight {
        width: 270px;
        margin-left: 8px;
        .briefTop {
          color: #919b9e;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 26px;
          font-size: 14px;
          border-bottom: 1px dashed #ccc;
        }
        .orderList {
          height: 190px;
          overflow: auto;
          margin-top: 4px;
          font-size: 12px;
          .list{
            display: inline-block;
            padding: 2px 6px 2px 2px;
          }
        }
        font-size: 14px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      border-top: 1px dashed #ccc;

      .bottomLeft {
        color: #000;
        font-size: 13px;
      }
      .bottomRight {
        color: #000;
        font-size: 12px;
        .span{
          padding-right: 6px;
        }
      }
      height: 40px;
    }
  }
}
// 步骤条样式

.steps-box {
  width: 96%;
  height: 36px;
  position: relative;
  top: 8px;
  font-size: 12px;
  margin: 0 auto;
  // <!-- 步骤条背景进度条 -->
  .line {
    margin: 0px auto;
    left: 39px;
    top: 9px;
    background: #63d4bb;
    width: 44px;
    height: 1px;
    overflow: hidden;
    flex-direction: row;
  }
  .Article-steps {
    display: flex;
    justify-content: space-between;
    .step {
      display: flex;
      align-items: center;
      .title {
        font-size: 12px;
        font-weight: bold;
        color: #808080;
        margin-top: 15px;
        &.active {
          color: #fff !important;
          background-color: #00b890;
        }
      }
      .step-num {
        width: 42px;
        height: 22px;
        border-radius: 12px;
        display: inline-block;
        line-height: 22px;
        text-align: center;
        border: 1px solid;
        color: #00b890;
        &.active {
          color: #fff !important;
          background: #00b890;
        }
        .num {
          display: inline-block;
          font-size: 12px;
        }
      }
    }
  }
  //当前所在位置样式
  .step-active {
    .step-num {
      color: #00b890 !important;
      .num {
        color: #00b890 !important;
      }
    }
    .title {
      color: #00b890 !important;
    }
  }
}
</style>