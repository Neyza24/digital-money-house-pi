// src/components/PublicHeader.tsx
'use client';
import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useHeader } from "@/hooks/useHeader";

export default function PublicHeader() {
  const { variant } = useHeader();

  const isLanding = variant === "landing";

  const headerBg = isLanding ? "bg-[#3A393E]" : "bg-primary";
  const logoSrc = isLanding ? "/logo-01.svg" : "/logo-01-dark.svg";

  return (
    <header
      className={`flex justify-between items-center p-4 px-5 ${headerBg}`}
    >
      <Link href="/">
        <Image
          src={logoSrc}
          alt="Virtual Wallet logo"
          width={90}
          height={30}
          priority
          className="dark:invert"
        />
      </Link>

      {isLanding && (
        <nav className="flex gap-4">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={cn(buttonVariants({ variant: "primary" }), "w-full")}
          >
            Registro
          </Link>
        </nav>
      )}
      {variant === "login" && null}
      {variant === "register" && (
        <nav className="flex gap-4">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "dark" }), "w-full")}
          >
            Iniciar sesion
          </Link>
        </nav>
      )}
    </header>
  );
}
