import { ArrowRight } from "lucide-react";
import { ItemTransaction } from "./itemTransaction";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { SearchInput } from "./searchInput";



interface DataTransaction {
    account_id: number;
    amount: number;
    dated: string;
    description: string;
    destination: string;
    id: number;
    origin: string;
    type: string;
  }

export const listDataTransactions: DataTransaction[] = [
    {
      account_id: 0,
      amount: 45678.456,
      dated: "lunes",
      description: "transferiste a Juan",
      destination: "string",
      id: 0,
      origin: "string",
      type: "string"
    },
    {
        account_id: 1,
        amount: 45678.457,
        dated: "martes",
        description: "transferiste a Maria",
        destination: "string",
        id: 1,
        origin: "string",
        type: "string"
    },
    {
        account_id: 2,
        amount: 45678.458,
        dated: "miercoles",
        description: "transferiste a Fred",
        destination: "string",
        id: 2,
        origin: "string",
        type: "string"
    }
  ]

export const ListTransactions = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <SearchInput />
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold">Tu actividad</CardTitle>
        </CardHeader>
        <CardContent>
          {listDataTransactions.map((item) => (
            <ItemTransaction key={item.id} item={item} />
          ))}
          <hr className="border-t-2 bg-slate-300 border-slate-300 mt-3" />
        </CardContent>
        <CardFooter className="flex-row items-center justify-between">
          <h5 className="text-sm md:text-base font-bold">
            Ver toda tu actividad
          </h5>
          <ArrowRight size={24} />
        </CardFooter>
      </Card>
    </div>
  );
};
