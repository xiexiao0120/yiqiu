<template>
  <div>
    <div class="top">
      <ul>
        <li class="xz">未评级</li>
        <li>已评级</li>
        <li>|</li>
        <li class="xz">全部</li>
        <li>摄影</li>
        <li>化妆</li>
        <li>修图</li>
        <li>选片</li>
        <li>销售</li>
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

    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%"
        :stripe="true"
        :border="true"
      >
        <el-table-column prop="date" label="姓名"> </el-table-column>
        <el-table-column prop="name" label="身份"> </el-table-column>
        <el-table-column prop="address" label="编号"> </el-table-column>
        <el-table-column prop="address" label="月排单" :sortable="true">
        </el-table-column>
        <el-table-column prop="address" label="月订单" :sortable="true">
        </el-table-column>
        <el-table-column prop="address" label="月加选" :sortable="true">
        </el-table-column>
        <el-table-column prop="address" label="月客样" :sortable="true">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-select v-model="value" size="mini" placeholder="选级">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
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
          address: "001",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "001",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "001",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "001",
        },
      ],

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
      margin-right: 30px;
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
.page {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 35px;
}
</style>