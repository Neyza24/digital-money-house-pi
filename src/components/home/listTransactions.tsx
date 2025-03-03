"use client";
import { ArrowRight } from "lucide-react";
import { ItemTransaction } from "./itemTransaction";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { SearchInput } from "./searchInput";
import { useActivity } from "@/hooks/useActivity";
import Link from "next/link";


export const ListTransactions = () => {
  const { filteredTransactions, } = useActivity();

  return (
    <div className="grid grid-cols-1 gap-4">
      <SearchInput />
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold">Tu actividad</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredTransactions.map((item) => (
            <ItemTransaction key={item.id} item={item} />
          ))}
          <hr className="border-t-2 bg-slate-300 border-slate-300 mt-3" />
        </CardContent>
        <CardFooter className="flex-row items-center justify-between">
          <h5 className="text-sm md:text-base font-bold">
            Ver toda tu actividad
          </h5>
          <Link href="/activity">
            <ArrowRight size={24} />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
