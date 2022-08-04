import { paths } from "routes/routes";
import get from "lodash/get";
import find from "lodash/find";
import filter from "lodash/filter";
import { IRoute } from "types/types";

/**
 * Filters out an array of routes consisting only of completed interview questions
 * @param routes
 * @return Returns an array of routes excluding the mainRoute
 */
export const notMainRoutes = (routes: IRoute[]): IRoute[] => {
  const mainRoute = get(find(routes, { path: paths.HOME }), "path", "");
  return filter(routes, (route: IRoute) => route.path !== mainRoute);
};
