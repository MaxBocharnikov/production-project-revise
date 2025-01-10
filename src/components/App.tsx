import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from '../pages/MainPage/MainPage.async';
import {AboutPageAsync} from '../pages/AboutPage/AboutPage.async';
import {useTheme} from '../theme/useTheme';
import {classNames} from '../helpers/classNames';

import '../styles/index.scss';


const App = () => {
    const {theme, onToggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={onToggleTheme}>Switch theme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
