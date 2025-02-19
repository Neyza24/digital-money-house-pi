'use client'
import { HeaderContextType } from "@/types/auth";
import { createContext, useState } from "react";


/**
 * Define los posibles valores que puede tener el header
 */

export type HeaderVariant = "landing" | "home" | "login" | "register" | "auth"  | "success";


export const HeaderContext = createContext<HeaderContextType | null>(null);


export const HeaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [variant, setVariant] = useState<HeaderVariant>("home");

  return (
    <HeaderContext.Provider value={{ variant, setVariant }}>
      {children}
    </HeaderContext.Provider>
  );
};


