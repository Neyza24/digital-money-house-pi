

// export default function AuthProviderRootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode
// }>) {
// 	return <div className="flex bg-[#272727] flex-col min-h-screen">
// 		{children}
// 	</div>
// }


// src/app/public/layout.tsx
'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useHeader } from "@/hooks/useHeader";
import PublicHeader from "@/components/publicHeader";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { setVariant } = useHeader();

  useEffect(() => {
    if (pathname === "/login") {
      setVariant("login");
    } else if (pathname === "/register") {
      setVariant("register");
    } else {
      setVariant("home");
    }
  }, [pathname, setVariant]);

  return (
    <>
      <PublicHeader />
      <main className="flex bg-[#272727] flex-col h-screen">{children}</main>
    </>
  );
}
