import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'


var marked = require('marked');

Vue.mixin({
  methods: {
    marked: function (input) {
      return marked(input);
    }
  }
});

Vue.use(Vuetify)
Vue.use(VueRouter);

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  vuetify:new Vuetify(),
  router,
  render: h => h(App)
})
