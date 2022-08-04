import { IRoute } from "types/types";

// Components
import MainPage from "pages/MainPage";

export const paths = {
    HOME: "/home",
    NOT_FOUND: "/not-found"
}

const routes: IRoute[] = [
    {
        path: "/home",
        component: <MainPage/>
    }
];

export default routes;