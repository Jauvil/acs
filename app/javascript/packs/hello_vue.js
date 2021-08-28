import '../../assets/stylesheets/application.scss';
import 'bootstrap';
import Vue from 'vue/dist/vue.esm';
import TurbolinksAdapter from 'vue-turbolinks';
import Vuelidate from 'vuelidate';
import Splash from '../components/splash.vue';
import Navbar from '../components/navbar.vue';
import Footer from '../components/vue_footer.vue';

Vue.use(TurbolinksAdapter);
Vue.use(Vuelidate);

Vue.component('splash', Splash);
Vue.component('navbar', Navbar);
Vue.component('vue_footer', Footer)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '[data-behavior="vue"]'
  });
  console.log(app);
})