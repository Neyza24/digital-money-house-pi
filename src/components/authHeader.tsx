
'use client';
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useHeader } from "@/hooks/useHeader";


export default function AuthHeader() {
  const { user, logoutUser } = useAuth();
  const { variant} = useHeader();



  const getInitials = (
    firstname: string | undefined,
    lastname: string | undefined
  ) =>
    `${(firstname ?? "").charAt(0).toUpperCase()}${(lastname ?? "").charAt(0).toUpperCase()}`;

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

      {variant === "auth" && (
        <nav className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="text-black">
            {getInitials(user?.firstname, user?.lastname)}
          </AvatarFallback>
        </Avatar>
        <Link href="/home" className="text-sm font-bold text-white">
          Hola, {user?.firstname} {user?.lastname}
        </Link>
        <button
          onClick={logoutUser}
          className="bg-red-500 px-4 py-2 rounded text-white"
        >
          Logout
        </button>
      </nav>
      )}
      
    </header>
  );
}
