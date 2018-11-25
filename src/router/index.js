import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sport from '@/components/sport/Sport'
import SportMain from '@/components/sport/SportMain'
import SportFit from '@/components/sport/SportFit'
import SportRun from '@/components/sport/SportRun'
import SportKIT from '@/components/sport/SportKIT'
import Find from '@/components/find/Find'
import FindMain from '@/components/find/FindMain'
import FindActivity from '@/components/find/FindActivity'
import Community from '@/components/community/Community'
import CommunityMain from '@/components/community/CommunityMain'
import My from '@/components/my/My'
import MyMain from '@/components/my/MyMain'
import Mall from '@/components/mall/Mall'
import MallMain from '@/components/mall/MallMain'
import Cart from '@/components/mall/Cart'
import Search from '@/components/search/Search'
import Course from '@/components/course/Course'
import CourseMain from '@/components/course/CourseMain'
import Record from '@/components/course/Record'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/sport'
    },{
      path: '/sport',
      name: 'Sport',
      component: Sport,
      redirect: '/sport/sportmain',
      children: [{
        path: 'sportmain',
        name: 'SportMain',
        component: SportMain
      },{
        path: 'sportfit',
        name: 'SportFit',
        component: SportFit
      },{
        path: 'sportrun',
        name: 'SportRun',
        component: SportRun
      },{
        path: 'sportKIT',
        name: 'SportKIT',
        component: SportKIT
      }]
    },{
      path: '/find',
      name: 'Find',
      component: Find,
      redirect: '/find/findmain',
      children: [{
        path: 'findmain',
        name: 'FindMain',
        component: FindMain
      },{
        path: 'findactivity',
        name: 'FindActivity',
        component: FindActivity
      }]
    },{
      path: '/mall',
      name: 'Mall',
      component: Mall,
      redirect: '/mall/mallmain',
      children: [{
        path: 'mallmain',
        name: 'MallMain',
        component: MallMain
      },{
        path: 'Cart',
        name: 'CArt',
        component: Cart
      }]      
    },{
      path: '/community',
      name: 'Community',
      component: Community,
      redirect: '/community/communitymain',
      children: [{
        path: 'communitymain',
        name: 'CommunityMain',
        component: CommunityMain
      }]
    },{
      path: '/my',
      name: 'My',
      component: My,
      redirect: '/my/mymain',
      children: [{
        path: 'mymain',
        name: 'MyMain',
        component: MyMain
      }]
    },{
      path: '/course',
      name: 'Course',
      component: Course,
      redirect: '/course/coursemain',
      children: [{
        path: 'coursemain',
        name: 'CourseMain',
        component: CourseMain
      },{
        path: 'record',
        name: 'Record',
        component: Record
      }]
    },{
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
