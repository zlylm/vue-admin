import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // CSS resets
import './util/cutom-instruction' // 自定义指令
import './util/element' //按需加载element ui
import './guard' // 守卫

Vue.prototype.$ELEMENT = { size: 'medium', zIndex: 3000 };

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
