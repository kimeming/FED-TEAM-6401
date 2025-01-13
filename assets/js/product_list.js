// 제품리스트 JS - product_list.js

// 데이터 불러오기
import productList from "../data/product-list.js";

// 개선해야할것 1.10
// gnb 메뉴에 따라 상품명이 바뀌어야함
// -> 메뉴 택스트를 불러와 제품리스트 데이터에 접근하고 매칭되는 것을 넣는다

// 제품리스트 .length만큼 for문 돌려야함

// 뷰 컴포넌트
const pLKey = Object.keys(productList);
const pLVal = Object.values(productList);
console.log(productList, pLKey, pLVal);

let pLCnt = pLVal[0].length;
// console.log(pLVal[0][0].productTitle);

// product-list-wrap에 넣을 컴포넌트 만들기
Vue.component("list-comp", {
  // (1) 템플릿 설정
  template: `
    <li class="product-select-box">
      <a class="product-view-nav" href="#" alt="제품 상세히보기">
        <section class="product-img-wrap">
            <img v-bind:src="pSrc" alt="테스트이미지"/>
        </section>
        <div class="product-info">
          <h2 class="product-title">{{pTitle}}</h2>
          <em class="product-price">{{pPrice}}</em>
          <strong class="product-note-count">{{pNoteCnt}}</strong>
        </div>
      </a>
    </li>
    `, ///template ///

  props: ["list-num"],
  data() {
    return {
      // 이미지 src: "./img/evening_glow/img_evenig_glow_01.jpg"
      pSrc: `./img/evening_glow/img_evenig_glow_${this.setNum()}.jpg`,
      // 상품이름
      pTitle: pLVal[0][this.productIdx()].productTitle,
      // 가격
      pPrice: pLVal[0][this.productIdx()].productPrice,
      // 노트개수
      pNoteCnt: pLVal[0][this.productIdx()].productNoteCount,
    };
  }, ///data

  methods: {
    setNum() {
      let lN = this.listNum;
      return lN < 10 ? "0" + lN : lN;
    },
    productIdx(){
      return this.listNum -1;
    }
  },
}); ///Vue 컴포넌트////////

// 새 인스턴스 생성
new Vue({ el: ".product-list-wrap" });
