import {ReactNode} from "react";
import {DarkModeProvider} from "../DarkModeProvider/DarkModeProvider.tsx";

interface KoibumiProviderProps {
    children: ReactNode;
}

export const KoibumiProvider: React.FC<KoibumiProviderProps> = ({ children }) => {
    return (
        <DarkModeProvider>
            {children}
        </DarkModeProvider>
    )
}