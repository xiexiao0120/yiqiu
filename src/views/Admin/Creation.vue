<template>
  <div class="creation">
    <div class="dd">
      <span>订单编号：</span>
      <div class="input">
        <el-input placeholder="YQ20230215" size="mini"></el-input>
      </div>
      <i class="el-icon-refresh-right"></i>
      <div class="date">创建时间：2022-04-16 23:59</div>
    </div>
    <div class="xx">
      <ul>
        <li class="clotheTime">
          <span>选服时间：</span>
          <div class="input">
            <el-date-picker
            v-model="clotheTime"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
          </div>
        </li>
        <li class="clotheTime">
          <span>拍摄时间：</span>
          <div class="input">
            <el-date-picker
            v-model="photoTime"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <span>男方姓名：</span>
          <div class="input">
            <el-input size="mini" placeholder="请输入姓名"></el-input>
          </div>
        </li>
        <li>
          <span>女方姓名：</span>
          <div class="input">
            <el-input size="mini" placeholder="请输入姓名"></el-input>
          </div>
        </li>
        <li>
          <span>手机号码：</span>
          <div class="input">
            <el-input size="mini" placeholder="请输入手机号码"></el-input>
          </div>
        </li>
        <li>
          <span>微信号码：</span>
          <div class="input">
            <el-input size="mini" placeholder="微信号|ID"></el-input>
          </div>
        </li>
      </ul>
    </div>
    <div class="tx">
      <div class="left">
        <span>选择套系：</span>
        <div class="select">
          <el-select size="mini" v-model="value" placeholder="请选中套系">
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

      <div class="right">
        <div>套系金额：6999元</div>
        <div>服饰造型：4服4造</div>
        <div>拍摄服装：主|副|古|便</div>
      </div>
    </div>

    <div class="xd">
      <ul>
        <li>
          <span>渠道来源：</span>
          <div class="select">
            <el-select size="mini" v-model="value" placeholder="请选择渠道来源">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </li>
        <li>
          <span>折扣来源：</span>
          <div class="input">
            <el-input size="mini" placeholder="请输入折扣金额"></el-input>
          </div>
        </li>
        <li>
          <span>优惠码：</span>
          <div class="input">
            <el-input size="mini" placeholder="请输入优惠码"></el-input>
          </div>
        </li>
        <li>
          <span>优惠券：</span>
          <div class="select">
            <el-select
              size="mini"
              v-model="value"
              placeholder="请选择平台优惠码"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </li>
      </ul>
    </div>

    <div class="sys">
      <div>
        <span>摄影师：</span>
        <div class="select">
          <el-select size="mini" v-model="value" placeholder="请选择摄影师">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        * 套系允许/客户需要才选择
      </div>
      <div>
        <span>化妆师：</span>
        <div class="select">
          <el-select size="mini" v-model="value" placeholder="请选择化妆师">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        * 套系允许/客户需要才选择
      </div>
    </div>

    <!-- 赠送产品 -->
    <div class="cp">
      <div class="left">
        <div class="tit">赠送产品</div>
        <div class="box">
          <div class="left-box">
            <div class="input">
              <el-input
                size="mini"
                placeholder="搜索"
                prefix-icon="el-icon-search"
              ></el-input>
            </div>
            <ul class="list" v-for="i in 3" :key="i">
              <li>
                <div class="subtit">类别A</div>
                <ul class="sublist">
                  <el-checkbox-group v-model="checkList">
                    <li v-for="i in 5" :key="i">
                      <el-checkbox :label="'选项名称' + i"
                        >选项名称{{ i }}</el-checkbox
                      >
                    </li>
                  </el-checkbox-group>
                </ul>
              </li>
            </ul>
          </div>
          <div class="right-box">
            <div class="d1">
              <span class="s1">已选{{ checkList.length }}项</span>
              <span class="s2">清空</span>
            </div>
            <ul>
              <li v-for="itme in checkList" :key="itme">{{ itme }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="tit">升级产品</div>
        <div class="box">
          <div class="left-box">
            <div class="input">
              <el-input
                size="mini"
                placeholder="搜索"
                prefix-icon="el-icon-search"
              ></el-input>
            </div>
            <ul class="list" v-for="i in 3" :key="i">
              <li>
                <div class="subtit">类别A</div>
                <ul class="sublist">
                  <li v-for="i in 5" :key="i">
                    <el-checkbox>选项名称{{ i }}</el-checkbox>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="right-box">
            <div class="d1">
              <span class="s1">已选2项</span>
              <span class="s2">清空</span>
            </div>
            <ul>
              <li>选项名称2</li>
              <li>选项名称5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="yxcd">
      <div class="tit">
        <div>
          意向程度：
          <el-select size="mini" v-model="value" placeholder="请选择意向程度">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div>创建人员：孙忆风</div>
        <div>销售人员：博乐</div>
      </div>
      <div class="zt">
        <span>意向状态：</span>
        <div class="text">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
        </div>
      </div>
    </div>

    <!-- <div class="bz">
      <span>备注信息：</span>
      <div class="text">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea"
        >
        </el-input>
      </div>
    </div> -->

    <div class="button">
      <el-button type="success" size="mini">完善订单</el-button>
      <el-button type="success" size="mini">提交修改</el-button>
      <el-button type="success" size="mini">推送订单</el-button>
      <el-button type="success" size="mini">收取定金</el-button>
      <el-button type="success" size="mini">收取尾款</el-button>
      <el-button type="success" size="mini">推送合同</el-button>
      <el-button type="success" size="mini">提交订单</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      clotheTime:'',
      photoTime:'',
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
      checkList: [],
      textarea: "",
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.creation {
  padding: 20px 0;
  font-size: 14px;
  > div {
    padding: 10px 20px;
    border-bottom: 1px dashed #ccc;
  }
  .dd {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #ccc;
    padding: 10px 20px;
    span {
      width: 80px;
    }
    .input {
      width: 200px;
    }
    i {
      font-size: 20px;
      margin-left: 5px;
    }
    .date,
    .p {
      margin-left: 92px;
    }
  }
  .xx {
    border-bottom: 1px dashed #ccc;
    ul {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        span {
          display: block;
          width: 80px;
        }
        .input {
          width: 200px;
        }
      }
    }
  }
  .tx {
    display: flex;
    align-items: flex-start;
    border-bottom: 1px dashed #ccc;
    .left {
      display: flex;
      align-items: center;
      span {
        display: block;
        width: 80px;
      }
      .select::v-deep {
        width: 200px;
        .el-select {
          width: 100%;
        }
      }
    }
    .right {
      margin-left: 60px;
      line-height: 30px;
    }
  }
  .xd {
    border-bottom: 1px dashed #ccc;
    ul {
      li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        span {
          width: 80px;
        }
        .input {
          width: 200px;
        }
        .select::v-deep {
          width: 200px;
          .el-select {
            width: 100%;
          }
        }
      }
    }
  }
  .sys {
    border-bottom: 1px dashed #ccc;
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 12px;
      span {
        width: 60px;
        font-size: 14px;
      }
    }
  }

  .cp {
    display: flex;
    .left,
    .right {
      .box {
        display: flex;
        height: 320px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        .left-box {
          height: 100%;
          overflow-y: auto;
          padding: 8px;
          width: 180px;
          &::-webkit-scrollbar {
            width: 3px;
          }
          &::-webkit-scrollbar-thumb {
            width: 3px;
            background: #999;
            border-radius: 20px;
          }
          .subtit {
            color: #999;
            padding: 5px 0;
          }
          .sublist {
            li {
              margin-bottom: 5px;
            }
          }
        }
        .right-box {
          padding: 15px;
          width: 150px;
          border-left: 1px solid #ccc;
          &::-webkit-scrollbar {
            width: 3px;
          }
          &::-webkit-scrollbar-thumb {
            width: 3px;
            background: #999;
            border-radius: 20px;
          }
          .d1 {
            .s1 {
              color: #999;
            }
            .s2 {
              font-size: 15px;
              // font-weight: bold;
              margin-left: 15px;
            }
          }
          > ul {
            margin-top: 20px;
            li {
              margin-bottom: 10px;
              // font-weight: bold;
            }
          }
        }
      }
    }
    .right {
      margin-left: 50px;
    }
  }

  .yxcd {
    > div {
      margin-bottom: 10px;
    }
    .tit {
      display: flex;
      align-items: center;
      > div {
        margin-right: 50px;
      }
    }
    .zt {
      display: flex;
      .text {
        width: 230px;
      }
    }
  }
  .bz {
    display: flex;
    .text {
      width: 230px;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    border: none;
  }
}
</style>