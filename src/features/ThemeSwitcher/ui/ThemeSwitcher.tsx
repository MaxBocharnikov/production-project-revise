import {FC} from 'react';
import {Theme} from 'app/providers/ThemeProvider/lib/ThemeContext';
import DarkThemeLogo from 'shared/assets/icons/theme-dark.svg';
import LightThemeLogo from 'shared/assets/icons/theme-light.svg';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
    onToggleTheme: () => void;
    theme: Theme;
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {theme, onToggleTheme,  className} = props;
    return (
        <Button theme={ButtonTheme.CLEAR} onClick={onToggleTheme} className={className}>
            {theme === Theme.dark ? <LightThemeLogo /> : <DarkThemeLogo />}
        </Button>
    );
};