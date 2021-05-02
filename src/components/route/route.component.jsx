import { Switch, Route } from "react-router-dom";
import RouteData from "./Route.data";
import Components from "./export.components";
const MainContentWithRoute = () => {
  return (
    <div>
      <Switch>
        {RouteData.map((route) => (
          <Route
            exact={route.exact}
            component={Components[route.component]}
            path={route.path}
            key={route.key}
          />
        ))}
      </Switch>
    </div>
  );
};
export default MainContentWithRoute;
