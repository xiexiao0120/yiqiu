<template>
  <div class="admin">
    <div class="nav">
      <ul>
        <li
          v-for="(itme, index) in navList"
          :key="index"
          :class="itme.path == pathFn ? 'xz' : ''"
          @click="goPath(itme)"
        >
          <i :class="itme.icon"></i>
          <span>{{ itme.title }}</span>
        </li>
      </ul>
    </div>
    <div class="views">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      navList: [
        // {
        //   title: "概况",
        //   path: "/overview",
        //   icon: "el-icon-eleme",
        // },
        // {
        //   title: "数据可视化",
        //   path: "/data_visualization",
        //   icon: "el-icon-pie-chart",
        // },
        {
          title: "服装管理",
          path: "/clothing",
          icon: "",
        },
        {
          title: "选服中心",
          path: "/service",
          icon: "",
        },
        {
          title: "摄控中心",
          path: "/camera",
          icon: "",
        },
        {
          title: "数码中心",
          path: "/digital_center",
          icon: "",
        },
        {
          title: "摄控管理",
          path: "/camera_manage",
          icon: "",
        },
        {
          title: "评级管理",
          path: "/department",
          icon: "",
        },
        {
          title: "订单管理",
          path: "/order",
          icon: "",
        },
        {
          title: "创建订单",
          path: "/creation",
          icon: "",
        },
        {
          title: "人事管理",
          path: "/personnel",
          icon: "",
        },
        {
          title: "基础信息",
          path: "/basic_information",
          icon: "",
        },
        {
          title: "主题管理",
          path: "/subject_list",
          icon: "",
        },
        {
          title: "套系管理",
          path: "/system",
          icon: "",
        },
        {
          title: "账号设置",
          path: "/account_setting",
          icon: "",
        },
        {
          title: "合同操作",
          path: "/contract_operations",
          icon: "",
        },
      ],
    };
  },
  methods: {
    goPath(path) {
      path = `/admin${path.path}`;
      this.$router.push(path);
    },
  },
  computed: {
    // 获取当前path，控制nav高亮
    pathFn() {
      return this.$route.path.split("/")[2]
        ? "/" + this.$route.path.split("/")[2]
        : "/overview";
    },
  },
};
</script>

<style scoped lang="less">
.admin {
  display: flex;
}
.nav {
  width: 200px;
  // height: 924px;
  height: calc(100vh - 100px);
  background: #fff;
  position: fixed;
  // top: 100px;
  z-index: 99;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    width: 3px;
    background: #ccc;
    border-radius: 20px;
  }
  ul {
    padding-top: 3px;
    li {
      padding-left: 10px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      span {
        font-size: 18px;
      }
      i {
        font-size: 20px;
        margin-right: 8px;
      }
      &.xz {
        background: #eeeeee;
        border-right: 3px solid #00b890;
        i {
          color: #12bb97;
        }
        span {
          color: #12bb97;
        }
      }
    }
  }
}
.views {
  padding-left: 200px;
  flex: 1;
}
</style>