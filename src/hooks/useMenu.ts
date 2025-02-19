
import { MenuContext } from "@/context/MenuContext";
import { useContext } from "react"

export const useMenu = () => {

    const context = useContext(MenuContext);
    if (!context) {
      throw new Error("useMenu must be used within a HeaderProvider");
    }
    return context;

}

export const MenuConsumer = MenuContext.Consumer;