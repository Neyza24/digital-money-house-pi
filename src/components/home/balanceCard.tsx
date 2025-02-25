
"use client"
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { formatCurrency } from "@/utils/formatCurrency";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";


export const BalanceCard = () => {

    const {accountData} = useAuth();
    console.log(accountData);

    const availableAmout = formatCurrency(accountData?.available_amount ?? 0);


  return (
    <Card className="bg-dark-01">
      <CardHeader className="flex-row items-center justify-end space-x-4 space-y-0">
        <Link
          href="/cards"
          className="text-sm md:text-base font-bold text-white"
        >
          Ver tarjetas
        </Link>
        <Link
          href="/cards"
          className="text-sm font-bold md:text-base text-white"
        >
          Ver CVU
        </Link>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="text-white text-base">
          Dinero disponible
        </CardDescription>
        <CardDescription className="border border-primary px-6 py-3 rounded-full inline-block">
          <span className="text-white font-bold text-2xl md:text-[34px]">
            {availableAmout}
          </span>
        </CardDescription>
      </CardContent>
    </Card>
  );
};