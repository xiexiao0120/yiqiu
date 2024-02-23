<template>
  <div>
    <div class="top">
      <ul>
        <li class="xz">当日任务</li>
        <li>昨日任务</li>
        <li>当月任务</li>
        <li>年度任务</li>
      </ul>
      <!-- input -->
      <div class="input">
        <el-input
          size="mini"
          prefix-icon="el-icon-search"
          placeholder="姓名|订单编号"
        ></el-input>
        <span>搜索</span>
      </div>
    </div>

    <div class="radio">
      <el-radio v-model="radio" label="1">选服时间</el-radio>
      <el-radio v-model="radio" label="2">拍摄设计</el-radio>
      |
      <el-radio v-model="radio2" label="1">升序</el-radio>
      <el-radio v-model="radio2" label="2">降序</el-radio>
    </div>

    <!-- divList -->
    <div class="info">
      <div class="box" v-for="i in 2" :key="i">
        <div class="left">基础信息</div>
        <div class="right">
          <div><span>订单编号：</span>2023-08-16</div>
          <div><span>拍摄时间：</span>2023-08-16</div>
          <div><span>女：</span>李艺乐</div>
          <div><span>男：</span>李艺乐</div>
          <div><span>单价：</span>￥4999</div>
        </div>
        <div class="left">服务团队</div>
        <div class="right">
          <div><span>摄影师：</span>李玉英</div>
          <div><span>化妆师：</span>李玉英</div>
          <div><span>外景：</span>李玉英</div>
          <div><span>出行：</span>自驾</div>
        </div>
        <div class="left">拍摄顺序</div>
        <div class="right">
          <div class="kg">主</div>
          <div class="kg">副</div>
          <div class="kg">古</div>
          <div class="kg">便</div>
          <div class="kg">外</div>
        </div>
        <div class="left">拍摄服装</div>
        <div class="right">
          <!-- 上传图片 -->
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :show-file-list="true"
            :multiple="true"
            accept=""
            :auto-upload="false"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>
        <div class="center">
          <el-button type="primary" size="mini">上传|查看</el-button>
           <el-button type="success" size="mini">查看简要</el-button>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="pge">
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      radio: "1",
      radio2: "1",
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped lang="less">
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
      margin-right: 50px;
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

.radio {
  margin: 15px 0;
  padding-left: 20px;
}
.info {
  padding: 0 20px;
  .box {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    margin-bottom: 10px;
    background: #fff;
    > div {
      // border: 1px solid #ccc;
      padding: 8px;
      // letter-spacing: 2px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .left {
      width: 90px;
      font-size: 14px;
      letter-spacing: 3px;
      display: flex;
      align-items: center;
    }
    .right::v-deep {
      // flex: 1;
      width: calc(100% - 90px);
      display: flex;
      // 
      .el-upload--picture-card {
        width: 130px;
        height: 130px;
      }
      .el-upload-list li {
        width: 130px;
        height: 130px;
      }
      // justify-content: space-between;
      > div {
        letter-spacing: 5px;
        margin-right: 46px;
        span {
          color: #ccc;
          font-weight: bold;
        }
      }

      .kg {
        width: 45px;
        height: 45px;
        border: 1px solid #000;
        border-radius: 5px;
        line-height: 43px;
        text-align: center;
        letter-spacing: 0;
        margin-right: 10px;
      }
    }
    .center{
      width: 100%;
      display: flex;
      justify-content: center;
      // align-items: center;
    }
  }
}

.pge {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>