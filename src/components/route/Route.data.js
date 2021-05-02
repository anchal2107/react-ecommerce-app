import  *  as Components from "./route.components_name.constants";
const RouteData = [
  {
    path: "/home",
    exact: false,
    component: Components.COMP_HOMEPAGE,
    key:1,
  },
  {
    path: "/product",
    exact: false,
    component: Components.COMP_PRODUCT,
    key:2,
  },
  {
    path: "/",
    exact: true,
    component: Components.COMP_HOMEPAGE,
    key:3,
  },
];

export default RouteData;
