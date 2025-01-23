
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { buttonVariants } from './ui/button';
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { cn } from '@/lib/utils';



const Header = () => {

  const pathname = usePathname();

  const bgHeader = {
    bgDefault: "[#3A393E]",
    bgAuth: "primary",
  }

  const isAuthenticated  = !!0;

  const bgDinamic = !isAuthenticated ? bgHeader.bgDefault : bgHeader.bgAuth;
  

  return (
    <header
      className={`flex justify-between items-center gap-4 bg-${bgDinamic} p-4 px-5`}
    >
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

      <div
        className={`${pathname !== "/" && "hidden md:flex"} ml-auto my-auto`}
      >
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback >NA</AvatarFallback>
            </Avatar>
            <Link href="/" className="text-sm font-semibold mx-4">
              Hola, Nombre Apellido
            </Link>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className={cn(buttonVariants({variant: 'outline' }))}>
              Ingresar
            </Link>
            <Link href="/register" className={cn(buttonVariants({variant: 'primary' }))}>
              Crear cuenta
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header
