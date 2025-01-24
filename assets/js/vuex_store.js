//프로젝트 리스트 뷰엑스 스토어

import store from "./vuex_store_store.js";
// -->>> 뷰인스턴스에서 등록 필수
import { Header, Footer } from "./component/layout-comp.js";
// [1] 전역컴포넌트 만들기
// (1) 상단영역 컴포넌트
Header;
// (2) 서브메뉴 컴포넌트
/* 변경해야할 데이터
카테고리 : <h3 class="sub-title">카테고리</h3>
제품 탭 : <li class="tab on" ><a href="#">퍼퓸</a></li>
        <li class="tab" ><a href="#">체인 핸드</a></li>
        <li class="tab" ><a href="#">퍼퓸 밤</a></li>
*/
Vue.component("sub-top-comp", {
  // 템플릿
  template: `
     <div class="sub-top">
         <div class="inner" >
         <ul class="category-tab"  v-for="(val,key) in $store.state.linkSetData">
         <h3 class="sub-title">{{key}}</h3>
            <li class="tab" :class="{on: $store.state.catName === k }" @click="getCatName(k)"
            v-for="(v,k) in val.menu">
                <a href="#">{{k}}</a>
            </li>
            </ul>

        </div>
    </div>
    `,
  // 데이터 : 객체 리턴 메서드
  data() {
    return {};
  },
  methods: {
    getCatName(pm) {
      console.log("가져온카테고리", pm);
      // 파라미터 스토어로 보내기
      store.commit("setData", pm);
    },
  },
  mounted() {},
});
// (3) 메인영역 컴포넌트
Vue.component("list-contents-comp", {
  // 템플릿
  template: `
<div class="contents">
  <div class="product-list-area">
    <ul class="product-list-wrap">
        
         <li class="product-select-box" v-for="(v,k) in $store.state.catList">
              <a class="product-view-nav" href="./product-view-hm.html" alt="제품 상세히보기"
              >
                <section class="product-img-wrap">
                      <img :src="v.pImage" :alt="v.pTitle" />
                </section>
                <div class="product-info" >
                      <h2 class="product-title">{{v.pTitle}}</h2>
                      <em class="product-note">{{v.pNote}}</em>
                      <section>
                      <strong class="product-price">{{v.pPrice}}</strong>
                      <span class="product-note-count"></span>
                      </section>
                </div>
              </a>
        </li>
          
    </ul>
  </div>
  </div>
    `,
  // 데이터 : 객체 리턴 메서드
  data() {
    return {};
  },
  methods: {},
});
// (4) 하단영역 컴포넌트
Footer;

// [2] 뷰 인스턴스 생성 ->컴포넌트를 html에 뿌려주는 역할
new Vue({
  // 대상-컴포넌트 들어갈 대상
  el: "#app-list",
  // 스토어등록 필수
  store,
  // 공통 컴포넌트 등록
  components: {
    "header-comp": Header,
    "footer-comp": Footer,
  },
  data: {},
  methods: {},
  // 뷰인스턴스 생성후 구역
  created() {},
  // DOM 관련 코딩
  mounted() {
    const tab = document.querySelectorAll(".tab");
    tab.forEach((t) => {
      t.onclick = function () {
        tab.forEach((el) => el.classList.remove("on"));
        this.classList.add("on");
      };
    });
  },
});
