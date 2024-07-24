import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/KhachHang/LoginView.vue'
import RegisterView from '../views/KhachHang/RegisterView.vue'
// import KhachHangView from '../views/Admin/KhachHang/KhachHangView.vue'
import KhachSan from '../views/KhachHang/KhachSan.vue'
// import LoaiPhongView from '../views/Admin/LoaiPhong/LoaiPhongView.vue'
import Phong from '../views/KhachHang/Phong.vue'
// import DatPhongView from '../views/Admin/DatPhongg/DatPhongView.vue'
import LienHe from '../views/KhachHang/LienHe.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  

  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },

  
  {
    path: '/RegisterView',
    name: 'RegisterView',
    component: RegisterView
  },

  {
    path: '/KhachSan',
    name: 'KhachSan',
    component: KhachSan
  },

  // {
  //   path: '/KhachSanView',
  //   name: 'KhachSanView',
  //   component: KhachSanView
  // },

  // {
  //   path: '/LoaiPhongView',
  //   name: 'LoaiPhongView',
  //   component: LoaiPhongView
  // },

  {
    path: '/Phong',
    name: 'Phong',
    component: Phong
  },

  // {
  //   path: '/DatPhongView',
  //   name: 'DatPhongView',
  //   component: DatPhongView
  // },

  {
    path: '/LienHe',
    name: 'LienHe',
    component: LienHe
  },

  {
    path: '/admin',
    component: () => import('@/views/AdminView.vue'),
    children: [
      {
        path: 'Dasbroad',
        component: () => import('@/views/Admin/Dasbroad/DasbroadView.vue'),
      },
      {
        path: 'KhachHangView',
        component: () => import('@/views/Admin/KhachHang/KhachHangView.vue'),
      },

      {
        path: 'KhachSanView',
        component: () => import('@/views/Admin/KhachSan/KhachSanView.vue'),
      },

      {
        path: 'LoaiPhongView',
        component: () => import('@/views/Admin/LoaiPhong/LoaiPhongView.vue'),
      },

      {
        path: 'PhongView',
        component: () => import('@/views/Admin/Phong/PhongView.vue'),
      },

      {
        path: 'DatPhongView',
        component: () => import('@/views/Admin/DatPhongg/DatPhongView.vue'),
      },
      {
        path: 'KhachHangView',
        component: () => import('@/views/Admin/KhachHang/KhachHangView.vue'),
      },

    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
