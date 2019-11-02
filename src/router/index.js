import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{ // 首页
        path: '/',
        name: 'carHome',
        // 路由懒加载
        component: () =>
            import ('@/pages/carHome')
    }]
})