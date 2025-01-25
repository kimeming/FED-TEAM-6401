// 탬버린즈 상품 데이터 JS - product-list.js

// 데이터뽑아오기 ///////////
// temp1 ///////
// const temp1 = [];
// let idxN = 0;
// let imgN = 0;
// let rndNum = 0;
// document.querySelectorAll(`.product-other`).forEach((el) => {
//   ++idxN;
//   ++imgN;
//   rndNum = Math.floor(Math.random() * 99999);
//   temp1.push({
//     idx: idxN,
//     categot: "EVENING GLOW",
//     subCat: "",
//     pImage: "./img/evening_glow/img_evening_glow_" + (imgN == imgN < 0 ? imgN : "0" + imgN) + ".jpg",
//     pTitle: el.querySelector("h2").innerText,
//     pNote: el.querySelector("em").innerText,
//     pPrice: el.querySelector("strong").innerText,
//     pSellin: rndNum,
//   });
// });
// // 출력하기
// console.log(temp1);

// // temp2 ///////
// const temp2 = [];
// document.querySelectorAll(`.ProductListItem_product-small__TCb4m`).forEach((el) => {
//   temp2.push({
//     productTitle: el.querySelector("h2").innerText,
//     // productNote: el.querySelector("em").innerText,
//     // productPrice: ,
//   });
// });
// // 출력하기
// console.log(temp2);

// 카테고리별 제품 메인 제품리스트 ///////////////

/*********************** 
   * [제품 리스트 객체화]
    - 일렬번호(idx)
    -큰카테고리(categoty) -  큰카테고리 (소분류) 이렇게 써놨습니다 제품에 맞는 소분류 써주시면됩니다!
                EVENING GLOW (이브닝 글로우)
                PERFUME (퍼퓸, 퍼퓸 밤)
                HAND&LIP (쉘 퍼퓸 핸드, 에그 립밤, 체인 핸드)
                BODY (샤워리 바디, 퍼퓸드 핸드 앤 바디)
                HOME FRAGRANCE (카 디퓨저, 룸 프래그런스, 퍼퓸 캔들)
             
    -소분류(subCatgory) - 현재 데이터가 소분류로 나눠져 놓은거라 그대로 추가하시면됩니다!
    -이미지 경로()pImage - 
    -제품명(pTitle) - 
    -제품가격(pNote) -
    -제품노트(pPrice) - 
    -구매개수(pSellingCont) - 임의 숫자
    __________________________________

   productLIst = [ =>배열안에 객체로 만들어주세요
   {
      idx: 1,
      categoty: "EVENING GLOW",
      subCatgory: "이브닝글로우",
      pImage: "./img/evening_glow/img_evening_glow_01.jpg",
      pTitle: "퍼퓸 이브닝글로우",
      pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      pPrice: "₩ 149,000",
      pSellingCont : 31231
      
    },
    {
      idx: 2,
      categoty: "EVENING GLOW",
      subCatgory: "이브닝글로우",
      pImage: "./img/evening_glow/img_evening_glow_01.jpg",
      pTitle: "쉘 퍼퓸 핸드 이브닝글로우",
      pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      pPrice: "₩ 149,000",
      pSellingCont : 31231
      
    },
    ....
   {  idx: 16,
      categoty: "PERFUME",
      subCatgory: "퍼퓸
      pImage: "./img/perfumes/img_perfumes_01.jpg",
      pTitle: "퍼퓸 밤 이브닝글로우",
      pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
      pPrice: "₩ 46,500",
      pSellingCont : 31231
    }
   {4번 제품정보},
   {5번 제품정보},
   ] 
    ***********************/
const productList = [
  {
    idx: 1,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_01.jpg",
    pTitle: "퍼퓸 이브닝글로우",
    pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    pPrice: "₩ 149,000",
    pSellin: 86958,
  },
  {
    idx: 2,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_02.jpg",
    pTitle: "쉘 퍼퓸 핸드 이브닝글로우",
    pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    pPrice: "₩ 18,500",
    pSellin: 49243,
  },
  {
    idx: 3,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_03.jpg",
    pTitle: "에그 립밤 로즈우디 글로우",
    pNote: "자몽 | 우아한 장미 | 머스크",
    pPrice: "₩ 28,900",
    pSellin: 82712,
  },
  {
    idx: 4,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_04.jpg",
    pTitle: "퍼퓸 밤 이브닝글로우",
    pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    pPrice: "₩ 46,500",
    pSellin: 80574,
  },
  {
    idx: 5,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_05.jpg",
    pTitle: "퍼퓸 이브닝글로우",
    pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    pPrice: "₩ 42,000",
    pSellin: 86358,
  },
  {
    idx: 6,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_06.jpg",
    pTitle: "메탈 웨어 쉘",
    pNote: "쉘 퍼퓸 핸드 15mL 메탈 링",
    pPrice: "₩ 38,000",
    pSellin: 86893,
  },
  {
    idx: 7,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_07.jpg",
    pTitle: "레더 웨어 에그립밤",
    pNote: "에그 립밤 레더 케이스",
    pPrice: "₩ 35,000",
    pSellin: 10731,
  },
  {
    idx: 8,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_08.jpg",
    pTitle: "레더 웨어 퍼퓸 밤",
    pNote: "퍼퓸 밤 레더 케이스",
    pPrice: "₩ 42,000",
    pSellin: 81175,
  },
  {
    idx: 9,
    categot: "EVENING GLOW",
    subCat: "이브닝 글로우",
    pImage: "./img/evening_glow/img_evening_glow_09.jpg",
    pTitle: "레더 웨어 퍼퓸",
    pNote: "퍼퓸 11mL 레더 케이스",
    pPrice: "₩ 42,000",
    pSellin: 887,
  },

  {
    idx: 10,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_01.jpg",
    pTitle: "에그 퍼퓸 펌키니",
    pNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
    pPrice: "₩ 45,800",
    pSellin: 9925,
  },
  {
    idx: 11,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_02.jpg",
    pTitle: "에그 퍼퓸 카모",
    pNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
    pPrice: "₩ 45,800",
    pSellin: 9399,
  },
  {
    idx: 12,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_03.jpg",
    pTitle: "에그 퍼퓸 홀리메탈",
    pNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
    pPrice: "₩ 45,800",
    pSellin: 46847,
  },
  {
    idx: 13,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_04.jpg",
    pTitle: "퍼퓸 이브닝글로우",
    pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    pPrice: "₩ 42,000",
    pSellin: 14087,
  },
  {
    idx: 14,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_05.jpg",
    pTitle: "퍼퓸 카모",
    pNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
    pPrice: "₩ 42,000",
    pSellin: 23437,
  },
  {
    idx: 15,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_06.jpg",
    pTitle: "퍼퓸 화이트다즐링",
    pNote: "화이트 샴페인 | 다즐링 티 | 크리미한 머스크",
    pPrice: "₩ 42,000",
    pSellin: 31628,
  },
  {
    idx: 16,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_07.jpg",
    pTitle: "퍼퓸 이브닝글로우",
    pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    pPrice: "₩ 149,000",
    pSellin: 31981,
  },
  {
    idx: 17,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_08.jpg",
    pTitle: "퍼퓸 펌키니",
    pNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
    pPrice: "₩ 149,000",
    pSellin: 58047,
  },
  {
    idx: 18,
    categot: "PERFUME",
    subCat: "퍼퓸",
    pImage: "./img/perfumes/img_perfumes_09.jpg",
    pTitle: "퍼퓸 홀리메탈",
    pNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
    pPrice: "₩ 149,000",
    pSellin: 66324,
  },

  {
    idx: 19,
    categot: "PERFUME",
    subCat: "퍼퓸 밤",
    pImage: "./img/perfumes_balm/img_perfumes_balm_01.jpg",
    pTitle: "퍼퓸 밤 이브닝글로우",
    pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    pPrice: "₩ 46,500",
    pSellin: 22867,
  },
  {
    idx: 20,
    categot: "PERFUME",
    subCat: "퍼퓸 밤",
    pImage: "./img/perfumes_balm/img_perfumes_balm_02.jpg",
    pTitle: "퍼퓸 밤 홀리메탈",
    pNote: "측백나무잎ㅣ차가운 금속ㅣ화이트 머스크",
    pPrice: "₩ 46,500",
    pSellin: 46801,
  },
  {
    idx: 21,
    categot: "PERFUME",
    subCat: "퍼퓸 밤",
    pImage: "./img/perfumes_balm/img_perfumes_balm_03.jpg",
    pTitle: "퍼퓸 밤 펌키니",
    pNote: "달콤한 호박ㅣ차조기잎ㅣ코코넛밀크",
    pPrice: "₩ 46,500",
    pSellin: 32726,
  },
  {
    idx: 22,
    categot: "PERFUME",
    subCat: "퍼퓸 밤",
    pImage: "./img/perfumes_balm/img_perfumes_balm_04.jpg",
    pTitle: "퍼퓸 밤 카모",
    pNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
    pPrice: "₩ 46,500",
    pSellin: 84622,
  },
  {
    idx: 23,
    categot: "PERFUME",
    subCat: "퍼퓸 밤",
    pImage: "./img/perfumes_balm/img_perfumes_balm_05.jpg",
    pTitle: "퍼퓸 밤 라레",
    pNote: "이슬을 머금은 풋사과 | 화이트 튤립 | 샌달우드",
    pPrice: "₩ 46,500",
    pSellin: 69497,
  },
  {
    idx: 24,
    categot: "PERFUME",
    subCat: "퍼퓸 밤",
    pImage: "./img/perfumes_balm/img_perfumes_balm_06.jpg",
    pTitle: "퍼퓸 밤 버가샌달",
    pNote: "지중해의 베르가못 | 쌉싸래한 청귤 | 샌달우드",
    pPrice: "₩ 46,500",
    pSellin: 60152,
  },
  {
    idx: 25,
    categot: "PERFUME",
    subCat: "퍼퓸 밤",
    pImage: "./img/perfumes_balm/img_perfumes_balm_07.jpg",
    pTitle: "퍼퓸 밤 스웨이드페어",
    pNote: "시원한 배 | 스웨이드 | 쌉쌀한 갈바넘",
    pPrice: "₩ 46,500",
    pSellin: 36344,
  },

  {
    idx: 26,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_01.jpg",
    pTitle: "쉘 퍼퓸 핸드 이브닝글로우",
    pNote: "노을에 물든 장미 | 라즈베리 | 머스크",
    pPrice: "₩ 32,000",
    pSellin: 74094,
  },
  {
    idx: 27,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_02.jpg",
    pTitle: "쉘 퍼퓸 핸드 펌키니",
    pNote: "달콤한 호박 | 차조기잎 | 코코넛밀크",
    pPrice: "₩ 32,000",
    pSellin: 96456,
  },
  {
    idx: 28,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_03.jpg",
    pTitle: "쉘 퍼퓸 핸드 볼드시트러스",
    pNote: "다채로운 시트러스 | 캐럿시드 | 고소한 결명자",
    pPrice: "₩ 32,000",
    pSellin: 51119,
  },
  {
    idx: 29,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_04.jpg",
    pTitle: "쉘 퍼퓸 핸드 홀리메탈",
    pNote: "측백나무잎 | 차가운 금속 | 화이트 머스크",
    pPrice: "₩ 32,000",
    pSellin: 91172,
  },
  {
    idx: 30,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_05.jpg",
    pTitle: "쉘 퍼퓸 핸드 카모",
    pNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
    pPrice: "₩ 32,000",
    pSellin: 3615,
  },
  {
    idx: 31,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_06.jpg",
    pTitle: "쉘 퍼퓸 핸드 라레",
    pNote: "이슬을 머금은 풋사과 | 화이트 튤립 | 샌달우드",
    pPrice: "₩ 32,000",
    pSellin: 34888,
  },
  {
    idx: 32,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_07.jpg",
    pTitle: "쉘 퍼퓸 핸드 버가샌달",
    pNote: "지중해의 베르가못 | 쌉싸래한 청귤 | 샌달우드",
    pPrice: "₩ 32,000",
    pSellin: 54249,
  },
  {
    idx: 33,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_08.jpg",
    pTitle: "쉘 퍼퓸 핸드 페이구",
    pNote: "무화과나무 | 엠브레트 씨앗 | 달콤 씁쓸한",
    pPrice: "₩ 32,000",
    pSellin: 24682,
  },
  {
    idx: 34,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_09.jpg",
    pTitle: "쉘 퍼퓸 핸드 베인",
    pNote: "월계수 잎 | 은방울꽃 | 정돈된 가죽",
    pPrice: "₩ 32,000",
    pSellin: 51182,
  },
  {
    idx: 35,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_10.jpg",
    pTitle: "퍼퓸핸드 미니 듀오 세트 베스트(PUMKINI+FEY9)",
    pNote: "PUMKINI+FEY9",
    pPrice: "₩ 35,000",
    pSellin: 39679,
  },
  {
    idx: 36,
    categot: "HAND&LIP",
    subCat: "쉘 퍼퓸 핸드",
    pImage: "./img/shell_perfume_hand/img_shell_perfume_hand_11.jpg",
    pTitle: "퍼퓸핸드 미니 듀오 세트 베스트(CHAMO+VEIN)",
    pNote: "CHAMO+VEIN",
    pPrice: "₩ 35,000",
    pSellin: 85558,
  },

  {
    idx: 37,
    categot: "HAND&LIP",
    subCat: "에그 립밤",
    pImage: "./img/egg_lipbalm/img_egg_lipbalm_01.jpg",
    pTitle: "에그 립밤 로즈우디 글로우",
    pNote: "자몽 | 우아한 장미 | 머스크",
    pPrice: "₩ 28,900",
    pSellin: 27533,
  },
  {
    idx: 38,
    categot: "HAND&LIP",
    subCat: "에그 립밤",
    pImage: "./img/egg_lipbalm/img_egg_lipbalm_02.jpg",
    pTitle: "에그 립밤 로즈우디",
    pNote: "자몽 | 우아한 장미 | 머스크",
    pPrice: "₩ 28,900",
    pSellin: 31205,
  },
  {
    idx: 39,
    categot: "HAND&LIP",
    subCat: "에그 립밤",
    pImage: "./img/egg_lipbalm/img_egg_lipbalm_03.jpg",
    pTitle: "에그 립밤 밀크티",
    pNote: "베르가못 | 은은한 블랙티 | 코코넛",
    pPrice: "₩ 28,900",
    pSellin: 23295,
  },
  {
    idx: 40,
    categot: "HAND&LIP",
    subCat: "에그 립밤",
    pImage: "./img/egg_lipbalm/img_egg_lipbalm_04.jpg",
    pTitle: "에그 립밤 언센티드",
    pNote: "언센티드(무향)",
    pPrice: "₩ 28,900",
    pSellin: 71991,
  },
  {
    idx: 41,
    categot: "HAND&LIP",
    subCat: "에그 립밤",
    pImage: "./img/egg_lipbalm/img_egg_lipbalm_05.jpg",
    pTitle: "에그 립밤 우디그린",
    pNote: "신선한 만다린 과즙 | 아로마틱 허브 | 부쿠",
    pPrice: "₩ 28,900",
    pSellin: 63672,
  },

  {
    idx: 42,
    categot: "HAND&LIP",
    subCat: "체인 핸드",
    pImage: "./img/chain_hand/img_chain_hand_01.jpg",
    pTitle: "체인 핸드 7",
    pNote: "로즈우드 | 코코넛 향 | 우아함",
    pPrice: "₩ 24,000",
    pSellin: 18880,
  },
  {
    idx: 43,
    categot: "HAND&LIP",
    subCat: "체인 핸드",
    pImage: "./img/chain_hand/img_chain_hand_02.jpg",
    pTitle: "체인 핸드 000",
    pNote: "샌달우드 | 패츌리 | 흙 내음",
    pPrice: "₩ 24,000",
    pSellin: 98815,
  },
  {
    idx: 44,
    categot: "HAND&LIP",
    subCat: "체인 핸드",
    pImage: "./img/chain_hand/img_chain_hand_03.jpg",
    pTitle: "체인 핸드 421",
    pNote: "바닐라 우디 | 너티함",
    pPrice: "₩ 24,000",
    pSellin: 50725,
  },

  {
    idx: 45,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_01.jpg",
    pTitle: "샤워리바디워시 얼리모닝듀",
    pNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
    pPrice: "₩ 34,500",
    pSellin: 37248,
  },
  {
    idx: 46,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_02.jpg",
    pTitle: "샤워리바디워시 비가리코",
    pNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
    pPrice: "₩ 34,500",
    pSellin: 65441,
  },
  {
    idx: 47,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_03.jpg",
    pTitle: "샤워리바디워시 님버스",
    pNote: "도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크",
    pPrice: "₩ 34,500",
    pSellin: 71236,
  },
  {
    idx: 48,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_04.jpg",
    pTitle: "샤워리바디 듀오 얼리모닝듀",
    pNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
    pPrice: "₩ 70,000",
    pSellin: 76562,
  },
  {
    idx: 49,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_05.jpg",
    pTitle: "샤워리바디 듀오 비가리코",
    pNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
    pPrice: "₩ 70,000",
    pSellin: 31385,
  },
  {
    idx: 50,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_06.jpg",
    pTitle: "샤워리바디 듀오 님버스",
    pNote: "도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크",
    pPrice: "₩ 70,000",
    pSellin: 27776,
  },
  {
    idx: 51,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_07.jpg",
    pTitle: "샤워리바디로션 얼리모닝듀",
    pNote: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
    pPrice: "₩ 39,000",
    pSellin: 30090,
  },
  {
    idx: 52,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_08.jpg",
    pTitle: "샤워리바디로션 비가리코",
    pNote: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
    pPrice: "₩ 39,000",
    pSellin: 5035,
  },
  {
    idx: 53,
    categot: "BODY",
    subCat: "샤워리바디",
    pImage: "./img/showery_body/img_showery_body_09.jpg",
    pTitle: "샤워리바디로션 포그",
    pNote: "물안개 낀 숲 | 젖은 나무 | 캐시미어 우드",
    pPrice: "₩ 39,000",
    pSellin: 66727,
  },

  {
    idx: 54,
    categot: "BODY",
    subCat: "퍼퓸드 핸드앤바디",
    pImage: "./img/perfumed_hand/img_perfumed_hand_01.jpg",
    pTitle: "퍼퓸드 핸드워시 카모",
    pNote: "진득한 카모마일 | 부드러운 나무결 | 머스크",
    pPrice: "₩ 34,000",
    pSellin: 28204,
  },
  {
    idx: 55,
    categot: "BODY",
    subCat: "퍼퓸드 핸드앤바디",
    pImage: "./img/perfumed_hand/img_perfumed_hand_02.jpg",
    pTitle: "퍼퓸드 핸드워시 000",
    pNote: "샌달우드 | 패츌리 | 흙 내음",
    pPrice: "₩ 34,000",
    pSellin: 66176,
  },
  {
    idx: 56,
    categot: "BODY",
    subCat: "퍼퓸드 핸드앤바디",
    pImage: "./img/perfumed_hand/img_perfumed_hand_03.jpg",
    pTitle: "퍼퓸드 핸드워시 7",
    pNote: "로즈우드 | 코코넛 향 | 우아함",
    pPrice: "₩ 34,000",
    pSellin: 302,
  },

  {
    idx: 57,
    categot: "HOME FRAGRANCE",
    subCat: "카 디퓨저",
    pImage: "./img/car_diffuser/img_car_diffuser_01.jpg",
    pTitle: "카 디퓨저 비가리코",
    pNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
    pPrice: "₩ 85,000",
    pSellin: 62960,
  },
  {
    idx: 58,
    categot: "HOME FRAGRANCE",
    subCat: "카 디퓨저",
    pImage: "./img/car_diffuser/img_car_diffuser_02.jpg",
    pTitle: "카 디퓨저 카모",
    pNote: "진득한 카모마일ㅣ부드러운 나무결ㅣ머스크",
    pPrice: "₩ 85,000",
    pSellin: 29070,
  },
  {
    idx: 59,
    categot: "HOME FRAGRANCE",
    subCat: "카 디퓨저",
    pImage: "./img/car_diffuser/img_car_diffuser_03.jpg",
    pTitle: "카 디퓨저 블루포레스트",
    pNote: "안개 낀 사이프레스 숲ㅣ달콤한 허브ㅣ따뜻한 앰버",
    pPrice: "₩ 85,000",
    pSellin: 66854,
  },
  {
    idx: 60,
    categot: "HOME FRAGRANCE",
    subCat: "카 디퓨저",
    pImage: "./img/car_diffuser/img_car_diffuser_04.jpg",
    pTitle: "카 디퓨저 릴리코코",
    pNote: "물기 어린 릴리ㅣ푸른 대나무ㅣ크리미한 코코넛",
    pPrice: "₩ 85,000",
    pSellin: 63893,
  },
  {
    idx: 61,
    categot: "HOME FRAGRANCE",
    subCat: "카 디퓨저",
    pImage: "./img/car_diffuser/img_car_diffuser_05.jpg",
    pTitle: "카 디퓨저 비가리코 리필",
    pNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
    pPrice: "₩ 31,000",
    pSellin: 8247,
  },
  {
    idx: 62,
    categot: "HOME FRAGRANCE",
    subCat: "카 디퓨저",
    pImage: "./img/car_diffuser/img_car_diffuser_06.jpg",
    pTitle: "카 디퓨저 미니 비가리코",
    pNote: "씁쓸한 오렌지ㅣ시더우드ㅣ달콤한 리코라이스",
    pPrice: "₩ 46,500",
    pSellin: 81759,
  },
  {
    idx: 63,
    categot: "HOME FRAGRANCE",
    subCat: "카 디퓨저",
    pImage: "./img/car_diffuser/img_car_diffuser_07.jpg",
    pTitle: "카 디퓨저 미니 카모",
    pNote: "진득한 카모마일ㅣ부드러운 나무결ㅣ머스크",
    pPrice: "₩ 46,500",
    pSellin: 51606,
  },
  {
    idx: 64,
    categot: "HOME FRAGRANCE",
    subCat: "카 디퓨저",
    pImage: "./img/car_diffuser/img_car_diffuser_08.jpg",
    pTitle: "카 디퓨저 미니 블루포레스트",
    pNote: "안개 낀 사이프레스 숲ㅣ달콤한 허브ㅣ따뜻한 앰버",
    pPrice: "₩ 46,500",
    pSellin: 37744,
  },

  {
    idx: 65,
    categot: "HOME FRAGRANCE",
    subCat: "룸 프래그런스",
    pImage: "./img/room_fragrance/img_room_fragrance_01.jpg",
    pTitle: "룸 스프레이 파피루스",
    pNote: "파피루스ㅣ그린티ㅣ샌달우드",
    pPrice: "품절",
    pSellin: 27727,
  },
  {
    idx: 66,
    categot: "HOME FRAGRANCE",
    subCat: "룸 프래그런스",
    pImage: "./img/room_fragrance/img_room_fragrance_02.jpg",
    pTitle: "디퓨저 파피루스",
    pNote: "파피루스ㅣ그린티ㅣ샌달우드",
    pPrice: "오프라인 한정 판매",
    pSellin: 37358,
  },
  {
    idx: 67,
    categot: "HOME FRAGRANCE",
    subCat: "룸 프래그런스",
    pImage: "./img/room_fragrance/img_room_fragrance_03.jpg",
    pTitle: "룸 스프레이 파인네스트",
    pNote: "유칼립투스ㅣ파인니들ㅣ히노키우드",
    pPrice: "품절",
    pSellin: 65103,
  },
  {
    idx: 68,
    categot: "HOME FRAGRANCE",
    subCat: "룸 프래그런스",
    pImage: "./img/room_fragrance/img_room_fragrance_04.jpg",
    pTitle: "디퓨저 파인네스트",
    pNote: "유칼립투스ㅣ파인니들ㅣ히노키우드",
    pPrice: "오프라인 한정 판매",
    pSellin: 71424,
  },
  {
    idx: 69,
    categot: "HOME FRAGRANCE",
    subCat: "룸 프래그런스",
    pImage: "./img/room_fragrance/img_room_fragrance_05.jpg",
    pTitle: "룸 스프레이 멈버드",
    pNote: "유자ㅣ국화ㅣ머스크",
    pPrice: "품절",
    pSellin: 9188,
  },
  {
    idx: 70,
    categot: "HOME FRAGRANCE",
    subCat: "룸 프래그런스",
    pImage: "./img/room_fragrance/img_room_fragrance_06.jpg",
    pTitle: "디퓨저 멈버드",
    pNote: "유자ㅣ국화ㅣ머스크",
    pPrice: "오프라인 한정 판매",
    pSellin: 43248,
  },
  {
    idx: 71,
    categot: "HOME FRAGRANCE",
    subCat: "룸 프래그런스",
    pImage: "./img/room_fragrance/img_room_fragrance_07.jpg",
    pTitle: "룸 스프레이 먹",
    pNote: "그을린 소나무ㅣ먹물ㅣ패출리",
    pPrice: "품절",
    pSellin: 32138,
  },
  {
    idx: 72,
    categot: "HOME FRAGRANCE",
    subCat: "룸 프래그런스",
    pImage: "./img/room_fragrance/img_room_fragrance_08.jpg",
    pTitle: "디퓨저 먹",
    pNote: "그을린 소나무ㅣ먹물ㅣ패출리",
    pPrice: "오프라인 한정 판매",
    pSellin: 77585,
  },
  {
    idx: 73,
    categot: "HOME FRAGRANCE",
    subCat: "퍼퓸 캔들",
    pImage: "./img/perfume_candle/img_perfume_candle_01.jpg",
    pTitle: "퍼퓸 캔들 펌키니",
    pNote: "달콤한 호박 | 차조기잎 | 코코넛밀크",
    pPrice: "₩ 83,000",
    pSellin: 30625,
  },
  {
    idx: 74,
    categot: "HOME FRAGRANCE",
    subCat: "퍼퓸 캔들",
    pImage: "./img/perfume_candle/img_perfume_candle_02.jpg",
    pTitle: "퍼퓸 캔들 홀리메탈",
    pNote: "측백나무잎 | 차가운 금속 | 화이트 머스크",
    pPrice: "₩ 83,000",
    pSellin: 78213,
  },
  {
    idx: 75,
    categot: "HOME FRAGRANCE",
    subCat: "퍼퓸 캔들",
    pImage: "./img/perfume_candle/img_perfume_candle_03.jpg",
    pTitle: "퍼퓸 캔들 베이더인더레이크",
    pNote: "쑥 | 안개 낀 호수 | 촉촉한 이끼",
    pPrice: "₩ 83,000",
    pSellin: 32318,
  },
  {
    idx: 76,
    categot: "HOME FRAGRANCE",
    subCat: "퍼퓸 캔들",
    pImage: "./img/perfume_candle/img_perfume_candle_04.jpg",
    pTitle: "퍼퓸 캔들 레이트어텀",
    pNote: "비터오렌지 | 사탕수수 풀내음 | 머스크",
    pPrice: "₩ 83,000",
    pSellin: 82056,
  },
  {
    idx: 77,
    categot: "HOME FRAGRANCE",
    subCat: "퍼퓸 캔들",
    pImage: "./img/perfume_candle/img_perfume_candle_05.jpg",
    pTitle: "퍼퓸 캔들 미니 세트",
    pNote: "캔들 네 가지 향",
    pPrice: "₩ 148,000",
    pSellin: 88646,
  },
];
// console.log(productList);

// console.log("arr1",arr1)
// 데이터 export
export default productList;
