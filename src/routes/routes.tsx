import { IRoute } from "types/types";

// Components
import MainPage from "pages/MainPage";


const routes: IRoute[] = [
    {
        path: "/home",
        component: <MainPage/>
    }
];

export default routes;