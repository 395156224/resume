import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
// const Resume = () => import('@/pages/resume');
import Resume from '@/pages/resume'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // components: {
      //   [Resume.name]: Resume
      // }
      component: Resume
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})