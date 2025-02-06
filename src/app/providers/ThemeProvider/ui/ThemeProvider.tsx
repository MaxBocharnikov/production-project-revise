import {FC, useState} from 'react';
import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from '../lib/ThemeContext';

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.light

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}