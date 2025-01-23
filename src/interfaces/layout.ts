import { StaticImageData } from "next/image";
import { ReactNode } from "react";



export interface AuthHeaderComponentProps {
    children: ReactNode;
    logo?: StaticImageData;
    className?: string;
}

export interface MenuItemProps {
    href: string;
    name: string;
}

export interface MenuContextType {
    isOpen: boolean;
    toggleMenu: () => void;
}

export interface MenuProviderProps {
    children: ReactNode;
}