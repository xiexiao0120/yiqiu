<template>
  <div class="basi">
    <h3 class="h3">企业信息</h3>
    <div class="box box1">
      <div>
        <span>企业信息名称</span>
        <div class="input">
          <el-input size="mini" placeholder="工作室名称"></el-input>
        </div>
      </div>
      <div>
        <span>选片图片水印</span>
        <div class="input">
          <el-input size="mini" placeholder="水印信息"></el-input>
        </div>
      </div>
      <div>
        <span>内容主图水印</span>
        <div class="input">
          <el-input size="mini" placeholder="水印信息"></el-input>
        </div>
      </div>
      <div class="logo">
        <span>企业信息logo</span>
        <div class="upload">
          <el-upload
            action="#"
            :limit="1"
            list-type="picture-card"
            :auto-upload="false"
          >
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
      </div>
    </div>
    <h3 class="h3">选片功能</h3>
    <div class="box box2">
      <div>
        <el-checkbox>打乱选片顺序</el-checkbox>
        <el-checkbox>全屏选片模式</el-checkbox>
        <el-checkbox>删图模式选片</el-checkbox>
      </div>
      <div>
        <el-checkbox>展示已选内容</el-checkbox>
        <el-checkbox>选片限时</el-checkbox>
        <el-checkbox>限时结束强制退出</el-checkbox>
      </div>
      <div>
        <el-checkbox>初修选片模式</el-checkbox>
        <el-checkbox>计算加算金额</el-checkbox>
        <el-checkbox>提交后支付尾款</el-checkbox>
      </div>
      <div>
        <el-checkbox>未开始不展示缩略图</el-checkbox>
        <el-checkbox>当天重新选图</el-checkbox>
        <el-checkbox>首轮自动播放</el-checkbox>
      </div>
      <div>
        <el-checkbox>提交后展示加选金额</el-checkbox>
      </div>
      <div class="input-box">
        选片限时
        <div class="input">
          <el-input size="mini" placeholder="时间"></el-input>
        </div>
        分钟
      </div>
      <div class="input-box">
        当日选片次数
        <div class="input">
          <el-input size="mini" placeholder="次数"></el-input>
        </div>
        播放速度
        <div class="input">
          <el-input size="mini" placeholder="速度"></el-input>
        </div>
        毫秒
      </div>
    </div>
    <h3 class="h3">支付接口</h3>
    <div class="box box3">
      <el-button type="success" size="mini">微信支付</el-button>
      <el-button type="success" size="mini">支付宝支付</el-button>
      <el-button type="success" size="mini">代收支付</el-button>
      <el-button type="success" size="mini">本地收款码</el-button>
    </div>
    <h3 class="h3">尾款信息</h3>
    <div class="box box4">
      <el-radio v-model="radio" label="1">拍摄完收</el-radio>
      <el-radio v-model="radio" label="2">选完图收</el-radio>
    </div>
    <h3 class="h3">加选信息</h3>
    <div class="box box5">
      <div class="top">
        <div class="xz">统一定价</div>
        <div>人气主题</div>
        <div>豪华主题</div>
        <div>超值主题</div>
        <div>交个朋友</div>
        <div>定制主题</div>
        <div>旅拍系列</div>
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        元/张
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        张赠送
        <div class="input"><el-input size="mini"></el-input></div>
        张
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        元赠送
        <div class="input"><el-input size="mini"></el-input></div>
        张
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        张，/张减
        <div class="input"><el-input size="mini"></el-input></div>
        元
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        张，/张折
        <div class="input"><el-input size="mini"></el-input></div>
        折
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        张，总价减
        <div class="input"><el-input size="mini"></el-input></div>
        元
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        张，总价折
        <div class="input"><el-input size="mini"></el-input></div>
        元
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        元，/张减
        <div class="input"><el-input size="mini"></el-input></div>
        元
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        元，/张折
        <div class="input"><el-input size="mini"></el-input></div>
        折
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        元，总价减
        <div class="input"><el-input size="mini"></el-input></div>
        元
      </div>
      <div>
        加选
        <div class="input"><el-input size="mini"></el-input></div>
        元，总价折
        <div class="input"><el-input size="mini"></el-input></div>
        折
      </div>
      <div>
        总价
        <div class="input"><el-input size="mini"></el-input></div>
        元，折
        <div class="input"><el-input size="mini"></el-input></div>
        折
      </div>
      <div>
        总价
        <div class="input"><el-input size="mini"></el-input></div>
        元，减
        <div class="input"><el-input size="mini"></el-input></div>
        元
      </div>
    </div>

    <h3 class="h3">订单编号</h3>
    <div class="box box6">
      <span>订单编号首字母</span>
      <div class="input">
        <el-input size="mini" placeholder="YQ"></el-input>
      </div>
      <div class="chck">
        <el-checkbox>销售个人立减权限</el-checkbox>
      </div>
      <div class="radio">
        <el-radio v-model="radio" label="1">销售补差价</el-radio>
        <el-radio v-model="radio" label="2">销售无需补差价</el-radio>
      </div>
    </div>
    <h3 class="h3">轮播图</h3>
    <div class="box box7">
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
    <h3 class="h3">分类信息</h3>
    <div class="box box8">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ 新标签</el-button
      >
    </div>
    <h3 class="h3">服装类型</h3>
    <div class="box box8">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ 新标签</el-button
      >
    </div>
    <h3 class="h3">外景基地</h3>
    <div class="box box8">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ 新标签</el-button
      >
    </div>
    <h3 class="h3">拍摄地点</h3>
    <div class="box box8">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ 新标签</el-button
      >
    </div>
    <h3 class="h3">拍摄类型</h3>
    <div class="box box8">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ 新标签</el-button
      >
    </div>
    <h3 class="h3">身份管理</h3>
    <div class="box box8">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ 新标签</el-button
      >
    </div>
    <h3 class="h3">部门管理</h3>
    <div class="box box8">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ 新标签</el-button
      >
    </div>
    <h3 class="h3">等级管理</h3>
    <div class="box box8">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ 新标签</el-button
      >
    </div>
    <h3 class="h3">产品管理</h3>
    <div class="box box9">
      <div class="input">
        <el-input size="mini" placeholder="相框"></el-input>
      </div>

      <div class="text">
        <i class="el-icon-circle-plus-outline"></i>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="20X30水晶相框，20X30水晶相框，20X30水晶相框，20X30水晶相框"
        >
        </el-input>
      </div>
    </div>
    <h3 class="h3">权限管理</h3>
    <div class="box box10">
      <ul>
        <li>摄影师</li>
        <li v-for="i in 10" :key="i"><el-checkbox>选项{{i}}</el-checkbox></li>
      </ul>
      <ul>
        <li>化妆师</li>
        <li v-for="i in 10" :key="i"><el-checkbox>选项{{i}}</el-checkbox></li>
      </ul>
      <ul>
        <li>修图师</li>
        <li v-for="i in 10" :key="i"><el-checkbox>选项{{i}}</el-checkbox></li>
      </ul>
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
      radio: "1",
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
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
    // 标签
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
};
</script>

<style scoped lang="less">
.h3 {
  font-size: 16px;
  padding-left: 15px;
  height: 35px;
  line-height: 35px;
  // border: 1px solid red;
  font-weight: normal;
  background: #eee;
  color: #08b992;
}
.basi {
  padding-top: 10px;
  font-size: 14px;
  .box {
    padding: 10px 15px;
  }
  .box1 {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 15px;
    > div {
      display: flex;
      align-items: center;
      margin-right: 30px;
      margin-bottom: 10px;
    }
    .logo {
      width: 100%;
      .upload {
      }
    }
  }
  .box2 {
    div.input {
      width: 60px;
    }
    > div {
      margin-bottom: 10px;
    }
    .input-box {
      display: flex;
      align-items: center;
      font-weight: bold;
    }
  }
  .box5 {
    div.input {
      width: 60px;
    }
    .top {
      display: flex;
      font-weight: normal;
      div {
        margin-right: 30px;
        cursor: pointer;
        padding-bottom: 5px;
        &.xz {
          color: #08b992;
          border-bottom: 2px solid #08b992;
        }
      }
    }
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
  .box6 {
    .input {
      width: 200px;
      display: inline-block;
    }
    > div {
      margin-bottom: 10px;
    }
  }
  .box9{
    .input{
      margin-left: 30px;
      width: 300px;
      margin-bottom: 10px;
    } 
    .text{
      display: flex;
      align-items: flex-end;
      width: 1000px;
      i{
        font-size: 25px;
        margin-right: 5px;
      }
    }
  }
  .box10{
    display: flex;
    ul{
      margin-right: 10px;
      min-width: 130px;
      background: #fff;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      li{
        margin-bottom: 10px;
        &:nth-child(1){
          background: rgb(249, 249, 249);
          text-align: center;
        }
      }
    }
  }
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>