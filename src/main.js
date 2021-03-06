import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import { routes } from './routes'
import {store } from './state/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export const vBus = new Vue({
  methods: {
    changeName(name){
      this.$emit('nameChange', name)
    }
  }
})
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(Home)
})
