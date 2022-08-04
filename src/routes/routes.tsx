import { IRoute } from "types/types";

// Components
import MainPage from "pages/MainPage";
import NotFound from "pages/NotFound/NotFound";

export const paths = {
    HOME: "/home",
    NOT_FOUND: "/not-found"
}

const routes: IRoute[] = [
    {
        path: paths.HOME,
        component: <MainPage/>
    }
];

export const fallBackRoutes: IRoute[] = [
    {
        path: paths.NOT_FOUND,
        component: <NotFound/>
    }
]

export default routes;