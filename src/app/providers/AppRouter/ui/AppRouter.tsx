import React, {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig';
import {PageLoader} from 'widgets/PageLoader';



export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map(({path, element}) => (
                    <Route key={path} path={path} element={
                        <div className={'page-wrapper'}>{element}</div>
                    }/>
                ))}
            </Routes>
        </Suspense>
    );
};