import {useContext} from 'react';
import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from './ThemeContext';


export interface UseTheme {
    theme: Theme;
    onToggleTheme: () => void;
}

export const useTheme = (): UseTheme => {
    const {theme, setTheme} = useContext(ThemeContext);

    const onToggleTheme = () => {
        const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
    }

    return {theme, onToggleTheme};
}