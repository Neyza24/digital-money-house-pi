
'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useHeader } from "@/hooks/useHeader";
import PublicHeader from "@/components/publicHeader";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { setVariant } = useHeader();



  useEffect(() => {
    
    if (pathname === "/") {
      setVariant("landing");
    } else if (pathname === "/login" || pathname === "/register/success") {
      setVariant("login");
    } else if (pathname === "/register") {
      setVariant("register");
    } else {
      setVariant("landing");
    }
  }, [pathname, setVariant]);

  return (
    <>
      <PublicHeader />
      <main className="flex bg-[#272727] flex-col h-screen">
        
        {children}
      </main>
    </>
  );
}
