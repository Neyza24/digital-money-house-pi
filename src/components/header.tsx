"use client";

import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';


export default function Header() {
  const { accountData, logoutUser } = useAuth();

  const bgHeader = {
    bgDefault: "[#3A393E]",
    bgAuth: "primary",
  }

  console.log('header: account user', accountData)


  const bgDinamic = accountData ? bgHeader.bgAuth : bgHeader.bgDefault;


  return (
    <header className={`flex justify-between items-center gap-4 bg-${bgDinamic} p-4 px-5`}>

      <Link href="/">
        <Image
          className="dark:invert"
          src="/logo-01.svg"
          alt="Virtual Walletlogo"
          width={90}
          height={30}
          priority
        />
      </Link>

      <nav>
        {accountData? (
          // 🔹 Mostrar botón de Logout si está autenticado
          <button onClick={logoutUser} className="bg-red-500 px-4 py-2 rounded">
            Logout
          </button>
        ) : (
          // 🔹 Mostrar Login y Registro si no está autenticado
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({variant: 'outline' }))}>
              Login
            </Link>
            <Link href="/register" className={cn(buttonVariants({variant: 'primary' }))}>
              Registro
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
