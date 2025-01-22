// 제품리스트 JS - product_list.js

// 데이터 불러오기
import linkSetData from "../data/gnb-data.js";
console.log(linkSetData);
// import { Header, Footer} from "./component/layout-comp.js";
// import router from './router.js';
// 대상 선정

Vue.component('sub-top-comp',{
  template:`
  <div class="sub-top">
          <div class="inner" v-for="(val,key) in linkSetData">
            <h3 class="sub-title">{{key}}</h3>
            <ul class="category-tab" v-for="(v,k) in val.menu ">
              <li class="tab"><a href="#">{{k}}</a></li>
            </ul>
          </div>
        </div>
  `,
  data(){
    return{
      linkSetData: linkSetData,
    }
  }
})



// 새 인스턴스 생성
new Vue({
  el: "#app-list",
  data: {},
});


