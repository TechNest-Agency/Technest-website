import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Modern theme colors and effects are now handled through Tailwind classes
    const value = {
        colors: {
            primary: {
                light: 'from-primary-400',
                dark: 'to-primary-600',
            },
            secondary: {
                light: 'from-secondary-400',
                dark: 'to-secondary-600',
            },
            accent: 'to-secondary-400',
        }
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext; 