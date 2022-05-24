import Vue from 'vue'
import App from './App.vue'
import FlagIcon from 'vue-flag-icon'
import StarRating from 'vue-dynamic-star-rating'

Vue.config.productionTip = false
Vue.use(FlagIcon);
Vue.component('star-rating', StarRating);


new Vue({
  render: h => h(App),
}).$mount('#app')
