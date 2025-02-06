import { Header, Footer } from '/FED-TEAM-6401/assets/js/component/layout-comp.js';
import router from '/FED-TEAM-6401/assets/js/router.js';
import store from '/FED-TEAM-6401/assets/js/vuex_store_store.js'

new Vue({
  el: '#app',
  components: {
    'header-comp': Header,
    'footer-comp': Footer,
  },
  router,
  store,
});