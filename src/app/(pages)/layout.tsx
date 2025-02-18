// src/app/dashboard/layout.tsx
'use client';
import { useEffect } from "react"
import { useHeader } from "@/hooks/useHeader";
import AuthHeader from "@/components/authHeader";
import SideMenu from "@/components/sideMenu";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { setVariant } = useHeader();

  useEffect(() => {

    
      // Si la ruta es protegida, establecemos la variante "auth"
    setVariant("auth");
    
  }, [setVariant]);

  const menuItems = [
		{ name: 'Inicio', href: '/home' },
		{ name: 'Actividad', href: '/activity' },
		{ name: 'Tu perfil', href: '/profile' },
		{ name: 'Cargar dinero', href: '/deposit' },
		{ name: 'Pagar Servicios', href: '/services' },
		{ name: 'Tarjetas', href: '/cards' },
	]

  return (
    <>
      <AuthHeader/>
      <div className="flex md:h-screen-minus-layout">
			{/* <MenuComponent menuItems={menuItems} /> */}
      <SideMenu menuItems={menuItems} />
			<div className="flex-grow bg-gray-200 px-5 md:px-14 py-8 h-full overflow-auto">
      <main>{children}</main>
			</div>
		</div>
    </>
  );
}
