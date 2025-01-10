// 제품리스트 JS - product_list.js



// 뷰 컴포넌트

Vue.component('product-list-wrap',{
    temlpate:`
    <a class="product-view-nav" href="#" alt="제품 상세히보기">
  <img class="product-img" src="./img/img-test01.jpg" alt="테스트이미지" />
  <div class="product-info">
    <h2 class="product-title">퍼퓸 이브닝글로우</h2>
    <em class="product-price">₩ 149,000</em>
    <strong class="product-note-count">+15 가지 향</strong>
  </div>
</a>
    `
})