import { IRoute } from "types/types";

// Components
import MainPage from "pages/MainPage";
import NotFound from "pages/NotFound/NotFound";

import { notMainRoutes } from "helpers/helpers";

export const paths = {
    HOME: "/home",
    NOT_FOUND: "/not-found",
    THROTTLE: "/throttle"
}

const routes: IRoute[] = [
    {
        path: paths.HOME,
        component: <MainPage/>
    },
    {
        path: paths.THROTTLE,
        component: <div>Dummy throttle test</div>
    }
];

export const fallBackRoutes: IRoute[] = [
    {
        path: paths.NOT_FOUND,
        component: <NotFound/>
    }
]

export const interviewQuestionRoutes: IRoute[] = notMainRoutes(routes);

export default routes;