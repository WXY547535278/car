// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用vant库
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
    // 修改vant组件样式
import '@/styles/style.css'
// 引用axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 引用图片懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
        loading: require('./assets/img/loading.gif'), //加载中图片，一定要有，不然会一直重复加载占位图
        error: require('./assets/img/error.jpg') //加载失败图片
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})