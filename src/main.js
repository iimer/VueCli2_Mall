import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/css/content.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/theme/element-#F56C6C/index.css'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = Axios
Axios.defaults.baseURL = 'http://101.200.57.39:9999/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
