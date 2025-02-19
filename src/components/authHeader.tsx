
'use client';
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useHeader } from "@/hooks/useHeader";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";


export default function AuthHeader() {
  const { user } = useAuth();
  const { variant } = useHeader();
  const { toggleMenu } = useMenu();

  const pathname = usePathname();

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
        className={`${
          pathname !== "/" ? "md:hidden" : "hidden"
        } p-2 ps-4 rounded-md`}
        onClick={() => toggleMenu()}
      >
        <MenuIcon size={32} className="text-primary" />
      </button>
    </header>
  );
}
