import React, {createContext, useState, ReactNode, useContext} from 'react';

interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
    children: ReactNode;
}

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
