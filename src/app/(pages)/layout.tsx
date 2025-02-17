// src/app/dashboard/layout.tsx
'use client';
import { useEffect } from "react"
import { useHeader } from "@/hooks/useHeader";
import AuthHeader from "@/components/authHeader";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { setVariant } = useHeader();

  useEffect(() => {

    
      // Si la ruta es protegida, establecemos la variante "auth"
    setVariant("auth");
    
  }, [setVariant]);

  return (
    <>
      <AuthHeader/>
      <main>{children}</main>
    </>
  );
}
