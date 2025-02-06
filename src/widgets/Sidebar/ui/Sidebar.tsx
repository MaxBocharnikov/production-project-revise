import React, {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames';

import style from './Sidebar.module.scss';
import {ThemeSwitcher} from 'features/ThemeSwitcher/ui/ThemeSwitcher';
import {useTheme} from 'app/providers/ThemeProvider';
import {LangSwitcher} from 'features/LangSwitcher';
import {useTranslation} from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props;
    const {theme, onToggleTheme} = useTheme();
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div className={classNames(style.Sidebar, {[style.collapsed]: collapsed}, [className])}>
            <button onClick={() => setCollapsed(!collapsed)}>{t('Переключить')}</button>
            <div className={style.switchers}>
                <ThemeSwitcher
                    theme={theme}
                    onToggleTheme={onToggleTheme}
                />
                <LangSwitcher />
            </div>
        </div>
    );
};