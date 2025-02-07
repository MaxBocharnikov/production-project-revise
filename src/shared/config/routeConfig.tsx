import {RouteProps} from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {Button} from 'shared/ui/Button/Button';
import {NotFoundPage} from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Array<RouteProps> = [
    {
        path: routePaths.main,
        element: <MainPage />
    },
    {
        path: routePaths.about,
        element: <AboutPage />
    },
    {
        path: routePaths.not_found,
        element: <NotFoundPage />
    }
]