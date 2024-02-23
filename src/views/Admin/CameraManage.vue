<template>
  <div class="camera">
    <div class="top">
      <ul>
        <li class="xz">未排订单</li>
        <li>今日排单</li>
      </ul>
      <!-- input -->
      <div class="input">
        <el-input
          size="mini"
          prefix-icon="el-icon-search"
          placeholder="姓名|身份|编号"
        ></el-input>
        <span>搜索</span>
      </div>
    </div>

    <div class="box" v-for="i in 2" :key="i">
      <div class="d1">
        <div>订单编号</div>
        <div>YQ20230210</div>
        <div>订单日期</div>
        <div class="date">2023-12-02 08:02</div>
        <div></div>
        <div>拍摄日期</div>
        <div class="date-box">
          <el-date-picker
            size="mini"
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <div>选片日期</div>
        <div class="date-box">
          <el-date-picker
            size="mini"
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="d1">
        <div>摄影师</div>
        <div>化妆师</div>
        <div>礼服师</div>
        <div class="">选片师</div>
        <div>修图师</div>
        <div>销售</div>
        <div>创建</div>
        <div>外景</div>
        <div>出行</div>
      </div>
      <div class="d1">
        <div class="select" v-for="i in 9" :key="i">
          <el-select size="mini" v-model="value" placeholder="李贺">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>

      <!-- 拖动 -->
      <div class="drag">
        <div
          v-for="(itme, index) in dragList"
          :key="index"
          draggable="true"
          @dragstart="drag($event, index)"
          @drop="drop($event, index)"
          @dragover="dragover($event)"
        >
          {{ itme }}
        </div>
        <!-- <div>
          <div
            draggable="true"
            @dragstart="drag($event, 1)"
            @dragover="dragover"
          >
            主
          </div>
        </div>
        <div @drop="drop" @dragover="dragover"></div> -->
      </div>
      <!-- 照片 -->
      <div class="imglist">
        <img v-for="i in 5" :key="i" src="@/assets/img/jieh.jpg" alt="" />
      </div>
      <div class="look">
        <el-button type="success" size="mini">查看简要</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value1: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      dragList: ["主", "副", "古", "便", "外"],
      // 坐标，x,y 第一个为拖动的对象下标，第二个为放置的下标
      coor: {
        x: "",
        y: "",
      },
    };
  },
  methods: {
    // 什么要拖动
    drag(e, index) {
      this.coor.x = index;
      // e.target.style.border = "1px solid #000"
      e.target.classList.add("xz");
      setTimeout(() => {
        e.target.classList.remove("xz");
      }, 800);
    },
    // 进行放置
    drop(e, index) {
      e.preventDefault();
      this.coor.y = index;
      this.dragEnd();
    },
    // 放到何处
    dragover(e) {
      e.preventDefault();
    },

    // 拖动完成之后调用
    dragEnd() {
      let arr = this.dragList;
      this.dragList = [];
      let str = arr[this.coor.x];
      arr[this.coor.x] = arr[this.coor.y];

      arr[this.coor.y] = str;
      this.dragList = arr;
    },
  },
};
</script>

<style scoped lang="less">
.camera {
}
.top {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  padding-bottom: 5px;
  > ul {
    display: flex;
    li {
      margin-right: 100px;
      font-size: 14px;
      padding-bottom: 5px;
      cursor: pointer;
      &.xz {
        color: #05c697;
        border-bottom: 2px solid #05c697;
      }
    }
  }
  .input::v-deep {
    display: flex;
    width: 300px;
    > span {
      display: block;
      width: 50px;
      margin: 0 10px;
      font-size: 14px;
      line-height: 29px;
    }
    .el-input__inner {
      border-radius: 20px;
    }
  }
}

.box {
  margin: 20px;
  background: #fff;
  // padding: 15px;
  border: 1px solid #eee;
  // margin-bottom: 10px;
  .d1 {
    display: flex;
    > div {
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      height: 40px;
      flex: 1;
      text-align: center;
      line-height: 39px;
      &:nth-last-child(1) {
        border-right: none;
      }
      &.date {
        font-size: 12px;
      }
      &.date-box::v-deep {
        // padding: 0 20px;
        .el-date-editor {
          width: 90%;
        }
      }
      &.select {
        padding: 0 10px;
      }
    }
  }
  .drag {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    > div {
      width: 50px;
      height: 50px;
      border: 1px solid #eee;
      border-radius: 5px;
      text-align: center;
      line-height: 48px;
      margin-right: 10px;
      &.xz {
        border: 2px solid rgb(0, 184, 144);
      }
    }
  }
  .imglist {
    padding: 10px;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-right: 10px;
    }
  }
  .look {
    padding: 10px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: center;
  }
}
</style>