import  *  as Components from "./constants.components";
import * as Paths from './constants.path';
const RouteData = [
  {
    path: Paths.PATH_HOMEPAGE,
    exact: false,
    component: Components.COMP_HOMEPAGE,
    key:1,
  },
  {
    path: Paths.PATH_SHOP,
    exact: false,
    component: Components.COMP_SHOP,
    key:2,
  },
  {
    path: Paths.PATH_SIGNINANDSIGNUP,
    exact: false,
    component: Components.COMP_SIGNINANDSIGNUP,
    key:2,
  },
  {
    path: Paths.PATH_DEFAULT,
    exact: true,
    component: Components.COMP_HOMEPAGE,
    key:3,
  },
];

export default RouteData;
