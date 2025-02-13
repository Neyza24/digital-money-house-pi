'use client'
import { createContext, useState } from "react";


// Define las variantes posibles para el header
export type HeaderVariant = "home" | "login" | "register" | "auth";

// Define la forma del contexto
export interface HeaderContextType {
  variant: HeaderVariant;
  setVariant: (variant: HeaderVariant) => void;
}

export const HeaderContext = createContext<HeaderContextType | null>(null);


export const HeaderContextProvider = ({children} : {children: React.ReactNode}) => {

    const [variant, setVariant] = useState<HeaderVariant>("home");

    return (
        <HeaderContext.Provider value={{variant, setVariant}} >
            {children}
        </HeaderContext.Provider>
    )
}


