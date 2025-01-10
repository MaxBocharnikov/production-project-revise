import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from 'app/providers/theme';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {classNames} from 'shared/lib/classNames';

import './styles/index.scss';


const App = () => {
    const {theme, onToggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={onToggleTheme}>Switch theme</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
