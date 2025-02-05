// 데이터
import linkSetData from "/assets/data/gnb-data.js";
import store from "/assets/js/vuex_store_store.js";

// 컴포넌트 import
import { Main } from "/assets/js/component/main-comp.js";
import { SubLayout, Community } from "/assets/js/component/sub-comp.js";
import { List } from "/assets/js/component/list-comp.js";
import { View } from "/assets/js/component/view-comp.js";
import { StoreComp } from "/assets/js/component/store-comp.js";
import { Login, JoinComp } from "./component/login-comp.js";
import { FaqComp } from "./component/faq-comp.js";
import { ServiceComp } from "./component/service-comp.js";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/error",
    redirect: "/error.html",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/join",
    component: JoinComp,
  },
  {
    path: "/community",
    component: Community,
    children: [
      {
        path: "faq",
        component: FaqComp,
      },
      {
        path: "service",
        component: ServiceComp,
      },
    ],
  },
  {
    path: "/store",
    component: StoreComp,
  },
  {
    path: "/evening-glow",
    component: SubLayout,
    children: [
      {
        path: "evening-glow",
        component: List,
        props: { category: "EVENING GLOW", subCategory: "이브닝 글로우" },
        children: [
          {
            path: ":itemPath",
            name: "view-evening-glow",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
    ],
  },
  {
    path: "/perfume",
    component: SubLayout,
    children: [
      {
        path: "perfume",
        component: List,
        props: { category: "PERFUME", subCategory: "퍼퓸" },
        children: [
          {
            path: ":itemPath",
            name: "view-perfume",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
      {
        path: "perfume-balm",
        component: List,
        props: { category: "PERFUME", subCategory: "퍼퓸 밤" },
        children: [
          {
            path: ":itemPath",
            name: "view-perfume-balm",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
    ],
  },
  {
    path: "/hand-lip",
    component: SubLayout,
    children: [
      {
        path: "shell-perfume-hand",
        component: List,
        props: { category: "HAND&LIP", subCategory: "쉘 퍼퓸 핸드" },
        children: [
          {
            path: ":itemPath",
            name: "view-shell-perfume-hand",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
      {
        path: "egg-lip-balm",
        component: List,
        props: { category: "HAND&LIP", subCategory: "에그 립밤" },
        children: [
          {
            path: ":itemPath",
            name: "view-egg-lip-balm",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
      {
        path: "chain-hand",
        component: List,
        props: { category: "HAND&LIP", subCategory: "체인 핸드" },
        children: [
          {
            path: ":itemPath",
            name: "view-chain-hand",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
    ],
  },
  {
    path: "/body",
    component: SubLayout,
    children: [
      {
        path: "showery-body",
        component: List,
        props: { category: "BODY", subCategory: "샤워리 바디" },
        children: [
          {
            path: ":itemPath",
            name: "view-showery-body",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
      {
        path: "perfumed-hand-body",
        component: List,
        props: { category: "BODY", subCategory: "퍼퓸드 핸드앤바디" },
        children: [
          {
            path: ":itemPath",
            name: "view-perfumed-hand-body",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
    ],
  },
  {
    path: "/home-fragrance",
    component: SubLayout,
    children: [
      {
        path: "car-diffuser",
        component: List,
        props: { category: "HOME FRAGRANCE", subCategory: "카 디퓨저" },
        children: [
          {
            path: ":itemPath",
            name: "view-car-diffuser",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
      {
        path: "room-fragrance",
        component: List,
        props: { category: "HOME FRAGRANCE", subCategory: "룸 프래그런스" },
        children: [
          {
            path: ":itemPath",
            name: "view-room-fragrance",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
      {
        path: "perfume-candle",
        component: List,
        props: { category: "HOME FRAGRANCE", subCategory: "퍼퓸 캔들" },
        children: [
          {
            path: ":itemPath",
            name: "view-perfume-candle",
            component: View,
            props: (route) => ({ itemPath: route.params.itemPath }),
          },
        ],
      },
    ],
  },
];

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
  store.commit("setPath", to);
  const isMainPage = to.path === "/";
  switchStyles(isMainPage ? "/assets/css/main.css" : "/assets/css/sub.css");
  switchScripts(isMainPage ? "/assets/js/main.js" : "/assets/js/sub.js");
  next();
});

// 스타일 변경 함수
function switchStyles(newHref) {
  let existingLink = document.querySelector(
    "link[href*='main.css'], link[href*='sub.css']"
  );
  if (existingLink) existingLink.remove();
  let newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = newHref;
  document.head.appendChild(newLink);
}

// 스크립트 변경 함수
function switchScripts(newSrc) {
  let existingScript = document.querySelector(
    "script[src*='main.js'], script[src*='sub.js']"
  );
  if (existingScript) existingScript.remove();
  let newScript = document.createElement("script");
  newScript.src = newSrc;
  newScript.type = "module";
  newScript.defer = true;
  document.body.appendChild(newScript);
}

export default router;
