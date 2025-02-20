import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const WalletButtons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link
        href="/deposit"
        className={cn(buttonVariants({ variant: "primary", size: "xl" }), "")}
      >
        Ingresar dinero
      </Link>
      <Link
        href="/services"
        className={cn(buttonVariants({ variant: "primary", size: "xl" }), "")}
      >
        Pago de servicios
      </Link>
    </div>
  );
};
