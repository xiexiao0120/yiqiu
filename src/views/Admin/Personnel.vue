<template>
  <div class="personnel">
    <div class="input-box">
      <div>
        <span>员工ID：</span>
        <div class="input">
          <el-input size="mini" placeholder="请输入名称"></el-input>
        </div>
        <i class="el-icon-refresh-right"></i>
      </div>
      <div>
        <span>员工姓名：</span>
        <div class="input">
          <el-input size="mini" placeholder="请输入编号"></el-input>
        </div>
      </div>
      <div>
        <span>员工手机：</span>
        <div class="input">
          <el-input size="mini" placeholder="请输入编号"></el-input>
        </div>
      </div>
      <div>
        <span>所在部门：</span>
        <div class="select">
          <el-select size="mini" v-model="value" placeholder="请选择类型">
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
      <div>
        <span>职员身份：</span>
        <div class="select">
          <el-select size="mini" v-model="value" placeholder="选择身份">
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
      <div>
        <span>直属管理：</span>
        <div class="select">
          <el-select size="mini" v-model="value" placeholder="选择员工">
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
      <div class="button">
        <el-button size="small " type="success">新增员工</el-button>
      </div>
    </div>

    <div class="table-top">
      <div class="input">
        <el-input
          prefix-icon="el-icon-search"
          size="mini"
          placeholder="姓名|编号|部门|手机号|职员身份|状态"
        ></el-input>
      </div>
      <span>搜索</span>
    </div>

    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="姓名"> </el-table-column>
        <el-table-column prop="name" label="员工ID"> </el-table-column>
        <el-table-column prop="address" label="员工手机"> </el-table-column>
        <el-table-column
          prop="address"
          label="所在部门"
          :filters="[
            { text: '家', value: '家' },
            { text: '公司', value: '公司' },
          ]"
          :filter-method="filterTag"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="职员身份"
          :filters="[
            { text: '家', value: '家' },
            { text: '公司', value: '公司' },
          ]"
          :filter-method="filterTag"
        >
        </el-table-column>
        <el-table-column prop="address" label="直属管理"> </el-table-column>
        <el-table-column
          prop="address"
          label="状态"
          :filters="[
            { text: '家', value: '家' },
            { text: '公司', value: '公司' },
          ]"
          :filter-method="filterTag"
        >
        </el-table-column>
        <el-table-column prop="address" label="操作"> </el-table-column>
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
  methods: {
    filterTag() {},
  },
};
</script>

<style scoped lang="less">
.input {
  width: 200px;
}
.personnel {
  padding: 15px;
  font-size: 14px;
  > .input-box {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 15px 20px;
    > div {
      width: 33%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      i {
        font-size: 20px;
        margin-left: 8px;
      }
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 10px;
      margin-bottom: 0;
    }
  }
}

.table-top {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #eee;
  margin-top: 20px;
  padding: 5px 15px;
  background: #fff;
  .input::v-deep {
    width: 300px;
    margin-right: 8px;
    .el-input__inner {
      border-radius: 20px;
    }
  }
}
.table {
  border: 1px solid #eee;
  border-top: none;
}
.page{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>