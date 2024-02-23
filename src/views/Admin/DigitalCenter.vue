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
          placeholder="姓名|订单编号|拍摄日期"
        ></el-input>
        <span>搜索</span>
      </div>
    </div>

    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%"
        :stripe="true"
        :border="true"
      >
        <el-table-column prop="date" label="订单编号"> </el-table-column>
        <el-table-column prop="name" label="拍摄日期" :sortable="true">
        </el-table-column>
        <el-table-column prop="address" label="女方姓名"> </el-table-column>
        <el-table-column prop="address" label="男方姓名"> </el-table-column>
        <el-table-column prop="address" label="订单单价" :sortable="true">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="text">下载选片</el-button>
            <el-button size="mini" type="text">上传查看</el-button>
            <el-button size="mini" type="text">查看简要</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {},
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

.table {
  margin: 15px;
  border: 1px solid #eee;
}
.page{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 35px;
}
</style>