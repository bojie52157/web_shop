import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

//component : 注册全局组件，在实例化VUE前调用，注册后可以全局使用
export default new VueRouter({
  //所有路由
  routes: [
    {
      path : '/msite',
      component : MSite,
      meta : {
        showFooter : true
      }
    },
    {
      path : '/order',
      component : Order,
      meta : {
        showFooter : true
      }
    },
    {
      path : '/profile',
      component : Profile,
      meta : {
        showFooter : true
      }
    },
    {
      path : '/search',
      component : Search,
      meta : {
        showFooter : true
      }
    },
    {
      path : '/',
      redirect : '/msite'
    },
    {
      path : '/login',
      component : Login
    }
  ]
})
