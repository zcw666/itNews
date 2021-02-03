import Vue from 'vue'
import App from './App'
import store from '@/vuex'
import uView from "uview-ui";
import router from '@/router'


Vue.use(uView);
router()
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App,
})
app.$mount()
