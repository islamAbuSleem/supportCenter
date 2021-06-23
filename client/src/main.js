import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './global-components.js'
import VueFetch from './plugins/fetch.js'

Vue.config.productionTip = false

Vue.use(VueFetch, {
    baseUrl: "http://localhost:3000/"
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')