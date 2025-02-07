import React, {Suspense} from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/AppRouter';
import {Navbar} from 'widgets/Navbar/ui/Navbar';
import {classNames} from 'shared/lib/classNames';
import {Sidebar} from 'widgets/Sidebar';
import {PageLoader} from 'widgets/PageLoader';

import './styles/index.scss';


const App = () => {
    const {theme} = useTheme();
    return (
        <Suspense fallback={<PageLoader />}>
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    );
};

export default App;
