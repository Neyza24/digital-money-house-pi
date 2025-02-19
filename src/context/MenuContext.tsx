import { createContext, useState } from "react";
import { MenuContextType } from "@/types/auth";



export const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleMenu: () => {},
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

