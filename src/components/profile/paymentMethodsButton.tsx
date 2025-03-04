
import Link from "next/link"
import {  ArrowRight } from "lucide-react"


export const PaymentMethodsButton = () => {
  return (
    <Link
      href="/cards"
      className="px-6 py-10 rounded-xl w-full block bg-primary shadow-md hover:bg-primary/90"
    >
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold flex-grow">
          Gestioná los medios de pago
        </span>

        <ArrowRight className="w-6 h-6" />
      </div>
    </Link>
  );
};
