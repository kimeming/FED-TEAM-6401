// router.js
import linkSetData from '../data/gnb-data.js'
import { Main } from './component/main-comp.js';

const Home = {
  template: Main,
}

const routes = [
  {path: '/', component: Home},
];

const router = new VueRouter({
  routes, // 라우트 설정
  mode: 'history', // HTML5 history 모드 사용
});

export default router;