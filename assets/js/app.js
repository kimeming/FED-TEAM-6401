import { Header, Footer } from './component/layout-comp.js';
import { Main } from './component/main-comp.js';
import { SubContainer } from './component/sub-comp.js';
import router from './router.js';

new Vue({
  el: '#app',
  components: {
    'header-comp': Header,
    'main-comp': Main,
    'footer-comp': Footer,
    'sub-comp': SubContainer,
  },
  router,
});