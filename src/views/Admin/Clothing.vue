<template>
  <div class="clothing">
    <div class="img-upload">
      <div class="d1">
        <div class="left">
          <span>服装名称</span>
          <el-input placeholder="请输入名称" size="small"></el-input>
        </div>
        <div class="conter">
          <span>服装编号</span>
          <el-input placeholder="请输入编号" size="small"></el-input>
          <i class="el-icon-refresh-right"></i>
        </div>
        <div class="conter">
          <span>服装类型</span>
          <el-select placeholder="请选择类型" size="small" v-model="value">
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

      <div class="img-box">
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
      <div class="sub">
        <el-button type="success">新增服装</el-button>
      </div>
    </div>

    <div class="table">
      <div class="button">
        <div class="left">
          <el-button size="small">批量下架</el-button>
          <el-button size="small">批量上架</el-button>
          <el-button size="small">批量移除</el-button>
        </div>
        <div class="right">
          <el-input
            prefix-icon="el-icon-search"
            size="small"
            placeholder="请输入内容"
          ></el-input>
          <span>搜索</span>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="date" label="服装名称"> </el-table-column>
        <el-table-column prop="name" label="服装编号"> </el-table-column>
        <el-table-column prop="address" label="服装类型"> </el-table-column>
        <el-table-column prop="address" label="状态" :sortable="true">
        </el-table-column>
        <el-table-column prop="date" label="创建时间" :sortable="true">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small"> 下架 </el-button>
            <el-button type="text" size="small"> 移除 </el-button>
            <el-button type="text" size="small"> 阅图 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- page -->
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
      dialogImageUrl: "",
      dialogVisible: false,
      value: "",
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "1",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "5",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "8",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "1",
        },
      ],
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
    // 排序
    changeTableSort() {
      console.log("changeTableSort");
    },
  },
};
</script>

<style scoped lang="less">
.clothing {
  width: 100%;
  padding: 10px;
  .img-upload {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #000;

    padding: 8px 10px;
    .d1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        span {
          display: block;
          width: 100px;
          line-height: 30px;
        }
        i {
          font-size: 30px;
          transform: translateY(2px);
          cursor: pointer;
        }
      }
    }
    .img-box::v-deep {
      margin-top: 10px;
      border: 1px dotted #ccc;
      padding: 10px 8px;
      .el-upload--picture-card {
        width: 130px;
        height: 130px;
      }
      .el-upload-list li {
        width: 130px;
        height: 130px;
      }
    }
    .sub::v-deep {
      display: flex;
      justify-content: end;
      margin-top: 10px;
      span {
        color: #fff;
      }
    }
  }

  .table {
    margin-top: 20px;
    border: 1px solid #eee;
    .button {
      display: flex;
      justify-content: space-between;
      background: #fff;
      padding: 15px;
      border-bottom: 1px solid #eee;
      .right::v-deep {
        display: flex;
        align-items: center;
        > span {
          display: block;
          width: 60px;
          text-align: center;
        }
        .el-input__inner {
          border-radius: 20px;
        }
      }
    }
  }
  .page {
    display: flex;
    // align-items: center;
    justify-content: center;
    margin: 50px;
  }
}
</style>