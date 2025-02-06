import {RouteProps} from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Array<RouteProps> = [
    {
        path: routePaths.main,
        element: <MainPage />
    },
    {
        path: routePaths.about,
        element: <AboutPage />
    }
]