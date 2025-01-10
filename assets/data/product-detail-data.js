// 탬버린즈 상품 데이터 JS - product-detail.js

// 데이터뽑아오기
const temp = [];
const productDetailInfo = $(".ProductDetail_detail-inner__jvQMc");
temp.push({
  productTitle: productDetailInfo.querySelector("h1").innerText,
  productPrice: productDetailInfo.querySelector("em").innerText,
  preductNote: productDetailInfo.querySelector("span").innerText,
  productDescription: productDetailInfo.querySelector(".ProductDetail_detail-desc__MRvLd ").innerText,
});

// 출력하기
console.log(temp);

const productDetail = [
  /*********************** 
    1. 제품명 : productTitle
    2. 가격 : productPrice
    3. 향기 : preductNote
    4. 설명 : productDescription
    __________
    [정보 객체화]
    { 
    productTitle : ""
    productPrice : ""
    preductNote : ""
    productDescription : ""
    }
    ***********************/

  {
    productTitle: "퍼퓸 이브닝글로우",
    productPrice: "₩ 149,000",
    preductNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    productDescription:
      "모든 순간에 장미는 장미로써 완벽하게 존재합니다. 씨앗에서 움트어 화려하게 피어지는 매 순간, 끊임없이 변화하는 것처럼 보이지만 본질적으로 장미는 장미의 고아한 아름다움을 내포하고 있습니다. 해질녘 노을이 장미를 라즈베리처럼 발갛게 물들이고, 신선한 딜과 상큼한 레몬껍질로 밝은 빛을 겹쳐내면 살결을 보호하는 견고하고 우아한 가시처럼 얼씨한 패츌리와 사이프리올이 무게감을 더해 또 하나의 완전한 장미를 보여줍니다.",
  },
  
];
