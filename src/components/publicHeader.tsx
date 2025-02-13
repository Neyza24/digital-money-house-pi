// src/components/PublicHeader.tsx
'use client';
import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useHeader } from "@/hooks/useHeader";

export default function PublicHeader() {
  const { variant } = useHeader();

  return (
    <header className="flex justify-between items-center p-4 px-5 bg-[#3A393E]">
      <Link href="/">
        <Image
          src="/logo-01.svg"
          alt="Virtual Wallet logo"
          width={90}
          height={30}
          priority
          className="dark:invert"
        />
      </Link>
      {variant === "home" && (
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
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            Login
          </Link>
        </nav>
      )}
    </header>
  );
}
