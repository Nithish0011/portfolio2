import React, {createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children}) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        console.log('Initial Theme:', savedTheme || 'light');
        return savedTheme || 'light';
    });
        
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            console.log('Theme switched to:', newTheme);
            return newTheme;
        });
    };


    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme}}>
            <div aria-live="polite">
               {children}
            </div>
            
        </ThemeContext.Provider>
    )
}