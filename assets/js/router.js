// router.js
import linkSetData from '../data/gnb-data.js'

const routes = [];

Object.entries(linkSetData).forEach(([key, value]) => {
  // 기본 라우트
  const baseRoute = {
    path: value.link.path,
    name: key,
    component: function () {
      return import(`./component/${key}-comp.js`); // 라우트에 매칭되는 컴포넌트
    },
  };

  routes.push(baseRoute);

  // 하위 메뉴가 있으면 추가
  if (value.menu && Object.keys(value.menu).length > 0) {
    Object.entries(value.menu).forEach(([subKey, subValue]) => {
      const childRoute = {
        path: `${value.link.path}/${subValue.params.item}`,
        name: subValue.name,
        component: function () {
          return import(`./component/${subKey}-comp.js`); // 하위 메뉴에 맞는 컴포넌트
        },
        props: true, // params 전달
      };
      routes.push(childRoute);
    });
  }
});

const router = new VueRouter({
  routes, // 라우트 설정
  mode: 'history', // HTML5 history 모드 사용
});

export default router;