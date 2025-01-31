// 6401 팀프로젝트 :: 탬버린즈 - store.js //

/*************************************************************
  [  요구사항  ]
  - prev, next 버튼 없이 스와이프로 동작
  - 배너 개수에 맞게 하단에 바형 인디케이터 설정 및 조작
  ❓ JSON 활용 / 데이터 태그에서 자꾸 막히는 이유..
  ❓ 왜 e.preventDefault 했는데 스와이프가 안되징??
**************************************************************/

// import storeData from '../data/store-banner.json' with { type: "json" };

const targetEl = document.querySelectorAll(".store_slide_wrap");

targetEl.forEach((el) => setElFn(el));

function setElFn(tgEl) {
  const storeOl = tgEl.querySelector(".store_indic ol");
  const indicBox = tgEl.querySelector(".indic_box");
  const slidesContainer = tgEl.querySelector(".store_img");
  
  const slides = slidesContainer.querySelectorAll("li");
  let currentIndex = 0;

  // 인디케이터 생성
  slides.forEach(() => {
    storeOl.innerHTML += `<li></li>`;
  });

  const indicators = tgEl.querySelectorAll(".store_indic ol li");
  indicators[currentIndex].classList.add("active"); // 초기 활성화 인디케이터

  // 인디케이터 박스의 너비 설정
  indicBox.style.width = 100 / slides.length + "%";

  // 스와이프 기능 구현
  let startX, endX;

  tgEl.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    e.preventDefault(); // 기본 동작 방지
  });

  tgEl.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
    e.preventDefault(); // 기본 동작 방지
  });

  tgEl.addEventListener("touchend", () => {
    if (startX > endX + 50) {
      // 왼쪽으로 스와이프
      nextSlide();
    } else if (startX + 50 < endX) {
      // 오른쪽으로 스와이프
      prevSlide();
    }
  });
  tgEl.addEventListener("mousedown", (e) => {
    startX = e.pageX;
    e.preventDefault(); // 기본 동작 방지
  });

  tgEl.addEventListener("mousemove", (e) => {
    endX = e.pageX;
    e.preventDefault(); // 기본 동작 방지
  });

  tgEl.addEventListener("mouseup", () => {
    if (startX > endX + 50) {
      // 왼쪽으로 스와이프
      nextSlide();
    } else if (startX + 50 < endX) {
      // 오른쪽으로 스와이프
      prevSlide();
    }
  });

  function goToSlide(index) {
    currentIndex = index;
    updateSlides();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  }

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentIndex ? "block" : "none";
    });
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
    indicBox.style.left = indicators[currentIndex].offsetLeft + "px";
  }

  updateSlides(); // 초기 슬라이드 설정

} ////////////// setElFn 함수 /////////////////////
