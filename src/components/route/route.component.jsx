import { Route } from "react-router-dom";
import RouteData from "./Route.data";
import Components from "./export.components";
const MainContentWithRoute = () => {
  return (
    <div>
      {RouteData.map((route) => (
        <Route
          exact={route.exact}
          component={Components[route.component]}
          path={route.path}
        />
      ))}
    </div>
  );
};
export default MainContentWithRoute;
