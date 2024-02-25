<template>
  <div class="film">
    <div class="left">
      <el-checkbox-group v-model="checkList">
      <el-checkbox class="checkbox" v-for="i in 20" :key="i"
      >61cm×43cm定制克拉相册×30</el-checkbox
      >
      <el-checkbox class="checkbox">其他</el-checkbox>
      </el-checkbox-group>
    </div>
    <!-- right -->
    <div class="right">
      <!-- top -->
      <div class="top">
        <ul>
          <li v-for="(i, index) in 7" :key="i" :class="index == 0 ? 'x' : ''">
            全部[60]
          </li>
        </ul>
        <div class="ico">
          <i class="el-icon-full-screen"></i>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="car">
        <el-carousel
          height="730px"
          arrow="always"
          :autoplay="false"
          indicator-position="none"
        >
          <el-carousel-item v-for="item in 4" :key="item">
            <img class="img_box" src="@/assets/img/loginbg.png" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- foot -->
      <div class="foot">
        <div class="text">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="备注信息"
            clear="input"
          >
          </el-input>
        </div>

        <div class="submit">
          <div class="date">剩余时间：<span>08：10</span></div>
          <div class="checkbox-box">
            <el-checkbox class="checkbox">产品信息</el-checkbox>
            <el-checkbox class="checkbox">标准工具</el-checkbox>
            <el-checkbox class="checkbox">备注信息</el-checkbox>
          </div>
          <div class="list">保底40张 | 加选50张 | 共选90张 | 加选金1500元</div>
          <div class="b">
            <el-button size="mini">开始选片</el-button>
            <el-button size="mini">提交选片</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      checkList:[]
    }
  }
};
</script>

<style scoped lang="less">
.film {
  display: flex;
  height: 926px;
  background: #fff;
  .left {
    width: 264px;
    border-right: 1px solid rgba(65, 80, 88, 1);
    height: 100%;
    padding-left: 10px;
    padding-top: 10px;
    overflow-y: auto;
    .checkbox::v-deep {
      margin-bottom: 10px;
      .is-checked span {
        background: var(--color);
        border-color: var(--color);
      }
      .el-checkbox__label{
              color: var(--color) !important;
            }
    }
  }
  .right {
    padding-left: 6px;
    flex: 1;
    padding-right: 25px;
    .top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ul {
        width: 607px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          &.x {
            color: #00b890;
            border-bottom: 2px solid #00b890;
          }
        }
      }
      .ico {
        i {
          font-size: 22px;
          font-weight: bold;
          color: #00b890;
        }
      }
    }
    .car::v-deep {
      width: 1145px;
      margin-top: 10px;
      .img_box {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .el-carousel__arrow {
        width: 50px;
        height: 50px;
        background: transparent;
        border: 3px solid #00b890;
        i {
          font-size: 24px;
          color: #00b890;
          font-weight: bold;
        }
      }
    }
    .foot {
      display: flex;
      width: 100%;
      .text {
        width: 607px;
        height: 118px;
        margin-top: 10px;
        .el-textarea {
          font-size: 16px;
        }
      }
      .submit {
        flex: 1;
        margin-top: 10px;
        .date {
          text-align: center;
          color: rgba(16, 16, 16, 1);
          font-size: 20px;
          span {
            color: rgba(0, 184, 144, 1);
            font-size: 20px;
          }
        }
        .checkbox-box {
          display: flex;
          justify-content: center;
          .checkbox::v-deep {
            margin: 5px 30px;
            .is-checked span {
              background: var(--color);
              border-color: var(--color);
            }
            .el-checkbox__label{
              color: var(--color) !important;
            }
          }
        }
        .list {
          text-align: center;
          color: rgba(65, 80, 88, 1);
          font-size: 16px;
        }
        .b::v-deep {
          display: flex;
          justify-content: center;
          margin-top: 5px;
          button {
            span {
              color: rgba(0, 184, 144, 1);
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>