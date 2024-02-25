import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 新品推荐
  {
    path: '/new_arrivals',
    name: 'NewArrivals',
    component: () => import('@/views/NewArrivals.vue')
  },
  // 风格系列
  {
    path: '/style_series',
    name: 'StyleSeries',
    component: () => import('@/views/StyleSeries.vue'),
  },
  // 真实客照
  {
    path: '/real_guest_photo',
    name: 'RealGuestPhoto',
    component: () => import('@/views/RealGuestPhoto.vue'),
  },
  // 套系活动ChipSelect
  {
    path: '/chip_select',
    name: 'ChipSelect',
    component: () => import('@/views/ChipSelect.vue'),
  },
  // 在线选片
  {
    path: '/online_film_selection',
    name: 'OnlineFilmSelection',
    component: () => import('@/views/OnlineFilmSelection.vue'),
  },
  // 服装广场
  {
    path: '/clothing_square',
    name: 'ClothingSquare',
    component: () => import('@/views/ClothingSquare.vue'),
  },


  // 个人中心
  {
    path: '/personal_center',
    name: 'PersonalCenter',
    component: () => import('@/views/Personal/Personal.vue'),
    children: [
      {
        path: '/',
        name: 'Lgoin',
        component: () => import('@/views/Personal/Lgoin.vue'),
      },
      // 登录
      {
        path: '/personal_center/login',
        name: 'Lgoin',
        component: () => import('@/views/Personal/Lgoin.vue'),
      },
      // 选片
      {
        path: '/personal_center/film_selection',
        name: 'FilmSelection',
        component: () => import('@/views/Personal/FilmSelection.vue'),
      },
      // C 客户界面
      {
        path: '/personal_center/c_customer',
        name: 'Customer',
        component: () => import('@/views/Personal/Customer.vue'),
      },
      // 上传照片
      {
        path: '/personal_center/upload_photos',
        name: 'Customer',
        component: () => import('@/views/Personal/UploadPhotos.vue'),
      },
      // 查看简要
      {
        path: '/personal_center/subject_details',
        name: 'SubjectDetails',
        component: () => import('@/views/Personal/SubjectDetails.vue'),
      },


      // admin
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/Admin'),
        children: [
          // 概况
          {
            path: '/',
            name: 'Clothing',
            component: () => import('@/views/Admin/Clothing.vue'),
          },
          // {
          //   path: '/admin/overview',
          //   name: 'Overview',
          //   component: () => import('@/views/Admin/Overview.vue'),
          // },
          // // 数据可视化
          // {
          //   path: '/admin/data_visualization',
          //   name: 'DataVisualization',
          //   component: () => import('@/views/Admin/DataVisualization.vue'),
          // },
          // 服装管理
          {
            path: '/admin/clothing',
            name: 'Clothing',
            component: () => import('@/views/Admin/Clothing.vue'),
          },
          // 选服中心
          {
            path: '/admin/service',
            name: 'Service',
            component: () => import('@/views/Admin/Service.vue'),
          },
          // 摄控中心
          {
            path: '/admin/camera',
            name: 'Camera',
            component: () => import('@/views/Admin/Camera.vue'),
          },
          // 数码中心
          {
            path: '/admin/digital_center',
            name: 'DigitalCenter',
            component: () => import('@/views/Admin/DigitalCenter.vue'),
          },
          // 摄控管理
          {
            path: '/admin/camera_manage',
            name: 'CameraManage',
            component: () => import('@/views/Admin/CameraManage.vue'),
          },
          // 部门管理
          {
            path: '/admin/department',
            name: 'Department',
            component: () => import('@/views/Admin/Department.vue'),
          },
          // 订单管理
          {
            path: '/admin/order',
            name: 'Order',
            component: () => import('@/views/Admin/Order.vue'),
          },
          // 创建订单
          {
            path: '/admin/creation',
            name: 'Creation',
            component: () => import('@/views/Admin/Creation.vue'),
          },
          // 人事管理
          {
            path: '/admin/personnel',
            name: 'Personnel',
            component: () => import('@/views/Admin/Personnel.vue'),
          },
          // 基础信息
          {
            path: '/admin/basic_information',
            name: 'BasicInformation',
            component: () => import('@/views/Admin/BasicInformation.vue'),
          },
          // 主题列表
          {
            path: '/admin/subject_list',
            name: 'SubjectList',
            component: () => import('@/views/Admin/SubjectList.vue'),
          },
          // 套系管理
          {
            path: '/admin/system',
            name: 'System',
            component: () => import('@/views/Admin/System.vue'),
          },
          // 账号设置
          {
            path: '/admin/account_setting',
            name: 'AccountSetting',
            component: () => import('@/views/Admin/AccountSetting.vue'),
          },
          // 合同操作
          {
            path: '/admin/contract_operations',
            name: 'operations',
            component: () => import('@/views/Admin/ContractOperations.vue'),
          },
        ]
      },
    ]
  },

  // 主题详情
  {
    path: '/view_brief',
    name: 'ViewBrief',
    component: () => import('@/views/ViewBrief.vue'),
  },
  // 套系详情展示
  {
    path: '/tie_in_details',
    name: 'TieInDetails',
    component: () => import('@/views/TieInDetails.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
