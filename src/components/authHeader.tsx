
'use client';

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useHeader } from "@/hooks/useHeader";
import { useMenu } from "@/hooks/useMenu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { MenuIcon } from "lucide-react";

export default function AuthHeader() {
  const { user } = useAuth();
  const { variant } = useHeader();
  const { toggleMenu } = useMenu();

  const getInitials = (
    firstname: string | undefined,
    lastname: string | undefined
  ) =>
    `${(firstname ?? "").charAt(0).toUpperCase()}${(lastname ?? "")
      .charAt(0)
      .toUpperCase()}`;

  return (
    <header className="flex md:justify-between items-center p-4 px-5 bg-[#3A393E]">
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

      {variant === "auth" && (
        <nav className="ml-auto md:flex md:items-center md:space-x-4">
          <Avatar>
            <AvatarFallback>
              {getInitials(user?.firstname, user?.lastname)}
            </AvatarFallback>
          </Avatar>
          <Link
            href="/home"
            className="text-sm font-bold text-white hidden md:block"
          >
            Hola, {user?.firstname} {user?.lastname}
          </Link>
        </nav>
      )}

      <button
        className="p-2 ps-4 rounded-md md:hidden"
        onClick={toggleMenu}
      >
        <MenuIcon size={32} className="text-primary" />
      </button>
    </header>
  );
}
