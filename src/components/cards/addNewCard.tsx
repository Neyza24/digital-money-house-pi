
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, PlusCircleIcon } from "lucide-react";

export const AddNewCard = () => {

  return (
    <Card className="bg-dark-01 shadow-md py-3">
      <CardHeader className="text-white">
        <CardTitle className="text-sm md:text-base font-bold">
            Agregá tu tarjeta de débito o crédito
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4 text-primary">
        <PlusCircleIcon className="w-5 h-5 md:w-7 md:h-7" />
        <span className="text-lg md:text-xl font-bold flex-grow">
          Nueva tarjeta
        </span>
        <Link href="/cards/add">
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 hover:text-primary/90" />
        </Link>
      </CardContent>
    </Card>
  );
};
