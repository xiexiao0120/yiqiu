<template>
  <div class="system">
    <div class="top">
      <div class="top1">
        <div>
          <span>套系封面</span>
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>

        <div>
          <span>套系名称</span>
          <div class="input">
            <el-input size="mini" placeholder="输入套系名称"></el-input>
          </div>
        </div>
        <div>
          <span>套系金额</span>
          <div class="input">
            <el-input size="mini" placeholder="输入套系金额"></el-input>
          </div>
        </div>
        <div>
          <span>套系简要</span>
          <div class="input">
            <el-input size="mini" placeholder="4服|4造|80底"></el-input>
          </div>
        </div>
      </div>
      <div class="button">
        <el-button type="success" plain size="mini">编辑详情</el-button>
        <el-button type="success" plain size="mini">新增套系</el-button>
      </div>
    </div>

    <div class="table">
      <div class="gj">
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
      <div class="box">
        <el-table
          :data="tableData"
          style="width: 100%"
          :border="true"
          :stripe="true"
        >
          <el-table-column label="套系封面" width="175">
            <template slot-scope="scope">
              <!-- <el-image class="image"
                scr="https://gd-hbimg.huaban.com/ba91c4e29e7ce5ead82e6554856201abb6da4705957cc-FNthje_fw240webp"
                :preview-src-list="['https://gd-hbimg.huaban.com/ba91c4e29e7ce5ead82e6554856201abb6da4705957cc-FNthje_fw240webp']"
              ></el-image> -->
              <img src="@/assets/img/loginbg.png" alt="" class="image" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="套系名称"> </el-table-column>
          <el-table-column prop="address" label="套系金额" :sortable="true">
          </el-table-column>
          <el-table-column prop="address" label="套系简要"> </el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="mini" type="text">移除</el-button>
              <el-button size="mini" type="text">下架</el-button>
              <el-button size="mini" type="text">编辑套餐</el-button>
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
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
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
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
};
</script>

<style scoped lang="less">
.system {
  padding: 15px;
}
.top {
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  .top1 {
    display: flex;
    > div {
      display: flex;
      align-items: center;
      margin-right: 20px;
      span {
        padding-right: 8px;
      }
      .input {
        width: 150px;
      }
    }
  }
  .button {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}

.table {
  margin-top: 20px;
  .gj {
    border: 1px solid #eee;
    border-bottom: none;
    background: #fff;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
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
  .box::v-deep {
    border: 1px solid #eee;
    .image {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
}
.page{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>