<template>
  <div>
    <div class="top">
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
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :border="true">
        <el-table-column prop="date" label="订单编号"> </el-table-column>
        <el-table-column prop="name" label="客户姓名[女]"> </el-table-column>
        <el-table-column prop="address" label="客户姓名[男]"> </el-table-column>
        <el-table-column
          prop="address"
          label="套系主题"
          :filters="[
            { text: '家', value: '家' },
            { text: '公司', value: '公司' },
          ]"
          :filter-method="filterTag"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="套系价格"
          :filters="[
            { text: '家', value: '家' },
            { text: '公司', value: '公司' },
          ]"
          :filter-method="filterTag"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="订单进度"
          :filters="[
            { text: '家', value: '家' },
            { text: '公司', value: '公司' },
          ]"
          :filter-method="filterTag"
        >
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template>
            <el-button type="text" size="mini">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

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
  methods: {
    filterTag() {},
  },
};
</script>

<style scoped lang="less">
.top {
  background: #fff;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px 20px;
  padding-bottom: 5px;
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
  border: #EBEEF5;
}

.page{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>