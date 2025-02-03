// router.js
import linkSetData from "/assets/data/gnb-data.js";
import { Main } from "/assets/js/component/main-comp.js";
import { SubLayout } from "/assets/js/component/sub-comp.js";
import { List } from "/assets/js/component/list-comp.js";
import { Community } from "./component/sub-comp.js";

const routes = [
  {
    path: "/",
    component: Main, // 메인 컴포넌트 로드
  },
  {
    path: "/error",
    beforeEnter() {
      window.location.href = "/error.html"; // 에러 페이지로 리다이렉트
    },
  },
  {
    path: "*",
    redirect: "/", // 잘못된 경로는 메인 페이지로 리다이렉트
  },
];

// linkSetData 기반으로 동적 라우트 생성
Object.keys(linkSetData).forEach((key) => {
  const data = linkSetData[key];

  if (data.link && data.link.path) {
    const path = data.link.path;

    let childRoute;

    if (path === "/community") {
      childRoute = {
        path: ":subCategory?",
        component: Community,
      };
    } else {
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
      path: path,
      component: SubLayout,
      props: { showSubTop: path !== "/community" },
      children: [childRoute],
    });
  }
});

export const router = new VueRouter({
  mode: "history",
  routes,
});
