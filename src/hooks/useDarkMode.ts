import { createContext, useContext } from 'react';

export interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(
    undefined,
);
export const useDarkMode = (): DarkModeContextType => {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        console.warn('useDarkMode must be used within a DarkModeProvider');
        return {
            isDarkMode: false,
            toggleDarkMode: () => {},
        };
    }
    return context;
};
