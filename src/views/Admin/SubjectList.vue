<template>
  <div class="subject">
    <div class="box1">
      <div class="cont">
        <div>
          <span>主题名称</span>
          <el-select size="mini" v-model="value" placeholder="选择类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <span>样片类型</span>
          <el-select size="mini" v-model="value" placeholder="选择类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <span>拍摄类型</span>
          <el-select size="mini" v-model="value" placeholder="选择类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          新品管理
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </div>
      </div>
      <div class="cont">
        <div>
          <span>服饰类型</span>
          <el-select size="mini" v-model="value" placeholder="选择类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <span>拍摄基地</span>
          <el-select size="mini" v-model="value" placeholder="选择基地">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          <span>外景基地</span>
          <el-select size="mini" v-model="value" placeholder="选择基地">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>
          外景管理
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </div>
      </div>

      <div class="fm">
        <span>主题封面</span>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
      <div class="fm">
        <span>内容主题</span>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
      <div class="fm">
        <span>内容主题</span>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea"
        >
        </el-input>
      </div>

      <div class="chebox">
        <el-checkbox>发布小程序</el-checkbox>
        <el-checkbox>发布公众号</el-checkbox>
        <el-checkbox>发布PC网页</el-checkbox>
        <el-checkbox>发布推流广场</el-checkbox>
      </div>
      <div class="button">
        <el-button type="success" size="mini">新增主题</el-button>
      </div>
    </div>

    <div class="table">
      <div class="gj">
        <div class="left">
          <span class="xz">历史管理</span>
          <span>新品管理</span>
          <el-button type="danger" size="mini">移除</el-button>
          <el-button type="danger" size="mini">下架</el-button>
          <el-button type="danger" size="mini">移除新品</el-button>
        </div>
        <div class="right">
          <div class="input">
            <el-input
              prefix-icon="el-icon-search"
              size="mini"
              placeholder="主题名称|拍摄基地|外景基地"
            ></el-input>
          </div>
          <span>搜索</span>
        </div>
      </div>
      <div class="c">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="date" label="主题名称"> </el-table-column>
          <el-table-column
            prop="name"
            label="样片类型"
            :filters="[
              { text: '家', value: '家' },
              { text: '公司', value: '公司' },
            ]"
            :filter-method="filterTag"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="拍摄类型"
            :filters="[
              { text: '家', value: '家' },
              { text: '公司', value: '公司' },
            ]"
            :filter-method="filterTag"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="服饰类型"
            :filters="[
              { text: '家', value: '家' },
              { text: '公司', value: '公司' },
            ]"
            :filter-method="filterTag"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="拍摄基地"
            :filters="[
              { text: '家', value: '家' },
              { text: '公司', value: '公司' },
            ]"
            :filter-method="filterTag"
          >
          </el-table-column>
          <el-table-column prop="address" label="外景基地"> </el-table-column>
          <el-table-column
            prop="address"
            label="新品管理"
            :filters="[
              { text: '家', value: '家' },
              { text: '公司', value: '公司' },
            ]"
            :filter-method="filterTag"
          >
          </el-table-column>
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
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" type="text">移除</el-button>
              <el-button size="mini" type="text">下架</el-button>
              <el-button size="mini" type="text">下新</el-button>
              <el-button size="mini" type="text">阅图</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
      value2: true,
      dialogImageUrl: "",
      dialogVisible: false,
      textarea: "",
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    filterTag() {},
  },
};
</script>

<style scoped lang="less">
.subject {
  padding: 15px;
  font-size: 14px;
  .box1 {
    background: #fff;
    padding: 10px;
    padding-right: 25px;
    border: 1px solid #000;
    border-radius: 5px;
    .cont {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    .fm {
      display: flex;
      margin-bottom: 10px;
      > span {
        writing-mode: vertical-lr;
        text-align-last: justify;
        padding: 10px;
      }
    }
    .chebox {
      padding: 0 50px;
      display: flex;
      justify-content: space-between;
    }
    .button {
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
  }

  .table {
    margin-top: 15px;
    .gj {
      border: 1px solid #eee;
      border-bottom: none;
      background: #fff;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      .left {
        span {
          margin-right: 25px;
          cursor: pointer;
          &.xz {
            color: #28c445;
            border-bottom: 2px solid #28c445;
            padding-bottom: 5px;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        .input::v-deep {
          width: 250px;
          margin-right: 8px;
          input {
            border-radius: 20px;
          }
        }
      }
    }
    .c {
      border: 1px solid #eee;
    }
  }
}

.page{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>