import linkSetData from '/assets/data/gnb-data.js';
import productList from '/assets/data/product-list.js';
import { Main } from '/assets/js/component/main-comp.js';
import { SubLayout } from '/assets/js/component/sub-comp.js';
import { List } from "/assets/js/component/list-comp.js";
import { View } from "/assets/js/component/view-comp.js";
import {Store} from "/assets/js/component/store-comp.js";
import { Community } from "/assets/js/component/sub-comp.js";
import store from "/assets/js/vuex_store_store.js";

const routes = [
  {
    path: "/",
    component: Main, // 메인 컴포넌트 로드
  },
  {
    path: "/error",
    redirect: "/error.html",
  },
  {
    path: "/:category/:subCategory",
    component: SubLayout,
    props: (route) => ({
      showSubTop: ["list", "store"].includes(route.name), // 특정 경로에서만 subTop 표시
    }),
    children: [
      {
        path: "", // 기본적으로 List 컴포넌트 표시
        name: "list", // 라우트 이름 지정
        component: List,
        props: (route) => ({
          category: route.params.category, 
          subCategory: route.params.subCategory,
        }),
      },
      {
        path: ":itemPath", // 특정 아이템 상세 페이지
        name: "view", // 라우트 이름 지정
        component: View,
        props: (route) => ({
          itemPath: route.params.itemPath,
        }),
      },
    ],
  },
];

// 동적 라우트 생성 (linkSetData 기반)
Object.keys(linkSetData).forEach((key) => {
  const data = linkSetData[key];
  if (data.link && data.link.path) {
    const path = data.link.path;

    let childRoute;
    const isCommunity = path === "/community";
    const showSubTop = !isCommunity; // Community 페이지에서는 showSubTop을 false로 설정

    if (path === "/community") {
      childRoute = {
        path: ":subCategory?",
        component: Community,
      }
    } 
    else if(path === "/store"){
      childRoute = {
        path: ":subCategory?",
        component: Store,
        props: (route) => ({
          category: data.menu,
          subCategory: route.params.subCategory,
        }),
      };
    }
     else {
      childRoute = {
        path: ":subCategory?",
        component: List,
        props: (route) => ({
          category: data.menu,
          subCategory: route.params.subCategory,
        }),
      };
    }

    routes.push({
      path: path, // 동적 경로 설정
      component: SubLayout, // SubLayout을 기본 레이아웃으로 설정
      props: { 
        showSubTop: path !== "/community", // 커뮤니티 경로일 때만 false
      },
      children: [
        {
          path: ":subCategory?", // 동적으로 서브카테고리도 받기
          component: List,Store,
          props: (route) => ({
            category: data.menu,
            subCategory: route.params.subCategory,
          }),
        },
        {
          path: ":itemPath", // 상세 페이지
          component: View,
          props: (route) => ({
            itemPath: route.params.itemPath,
          }),
        },
      ],
    });

    routes.push({
      path: path,
      component: SubLayout,
      props: { showSubTop },
      children: [childRoute],
    });
  }
});

// 잘못된 경로는 메인으로 리디렉트
routes.push({
  path: "*",
  redirect: "/",
});

const router = new VueRouter({
  mode: "history",
  routes,
});

// 경로 변경 시 Vuex에 path 정보 저장
router.beforeEach((to, from, next) => {
  // 현재 라우트 정보 저장
  store.commit('setPath', to); 

  // 메인 페이지 판별
  const isMainPage = to.path === "/";

  // CSS 변경
  switchStyles(isMainPage ? "/assets/css/main.css" : "/assets/css/sub.css");

  // JS 변경
  switchScripts(isMainPage ? "/assets/js/main.js" : "/assets/js/sub.js");

  next();
});

// 스타일 변경 함수
function switchStyles(newHref) {
  let existingLink = document.querySelector("link[href*='main.css'], link[href*='sub.css']");
  if (existingLink) existingLink.remove(); // 기존 스타일 제거

  let newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = newHref;
  document.head.appendChild(newLink);
}

// 스크립트 변경 함수
function switchScripts(newSrc) {
  let existingScript = document.querySelector("script[src*='main.js'], script[src*='sub.js']");
  if (existingScript) existingScript.remove(); // 기존 스크립트 제거

  let newScript = document.createElement("script");
  newScript.src = newSrc;
  newScript.type = "module";
  newScript.defer = true;
  document.body.appendChild(newScript);
}

export default router;
