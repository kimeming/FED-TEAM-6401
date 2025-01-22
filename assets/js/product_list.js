// 제품리스트 JS - product_list.js
import { Header, Footer } from './component/layout-comp.js';
import { Main } from './component/main-comp.js';
import router from './router.js';

// 데이터 불러오기
import linkSetData from "../data/gnb-data.js";
import productList from "../data/product-list.js";
console.log(linkSetData);
// import { Header, Footer} from "./component/layout-comp.js";
// import router from './router.js';
// 대상 선정

const SubTopComp={
  template:`
  <div class="sub-top">
          <div class="inner" v-for="(val,key) in linkSetData">
            <h3 class="sub-title">{{key}}</h3>
            <ul class="category-tab" v-for="(v,k) in val.menu ">
              <li v-bin class="tab"><a href="#">{{k}}</a></li>
            </ul>
          </div>
        </div>
  `,
  data(){
    return{
      linkSetData: linkSetData,
    }
  },
  methods:{
    onTab(){
      const tab=document.querySelectorAll('.tab');
      tab.forEach(t=>t.classList.add('on'));
    }
  }
};


const ProductListComp={
  template:`
  <div class="product-list-area">
    <ul class="product-list-wrap">
      <li class="product-select-box">
        <button class="cart-btn">
          <div class="cart-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M15.507 4.49999H12.366C12.339 3.00599 10.944 1.79999 9.23398 1.79999C7.52398 1.79999 6.13799 3.00599 6.10199 4.49999H2.96099L1.79999 16.2H16.677L15.516 4.49999H15.507ZM9.23398 3.14999C10.197 3.14999 10.98 3.75299 11.016 4.49999H7.46099C7.49699 3.75299 8.27998 3.14999 9.24298 3.14999H9.23398ZM3.28498 14.85L4.17599 5.84999H14.283L15.174 14.85H3.27599H3.28498Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </button>
        <a class="product-view-nav" href="./product-view-hm.html" alt="제품 상세히보기" v-for="(val,key) in productList">
          <section class="product-img-wrap">
            <img src="./img/perfumes/img_perfumes_01.jpg" alt="" />
          </section>
          <div class="product-info">
            <h2 class="product-title"></h2>
            <em class="product-note"></em>
            <section>
              <strong class="product-price"></strong>
              <span class="product-note-count"></span>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
  `,
  data(){
    return{
      productList:productList,
    }
  },
}



// 새 인스턴스 생성
new Vue({
  el: "#app-list",
  components: {
    "sub-top-comp": SubTopComp,
    "product-list-comp": ProductListComp,
    "header-comp": Header,
    "footer-comp": Footer,
  },
  data: {
    
  },
});
