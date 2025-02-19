import { createContext, useState } from "react";
import { MenuContextType } from "@/types/auth";

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

