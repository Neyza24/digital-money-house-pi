import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { ArrowRight, PlusCircleIcon } from "lucide-react";

interface Props {
  isLimit: boolean
}

export const AddNewCard = ({isLimit}: Props) => {

  const router = useRouter();

  const handleClick = () => {
    if (!isLimit) {
      router.push("/cards/add");
    }
  };

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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleClick}
                className={` focus:outline-none ${
                  isLimit ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 hover:text-primary/90" />
              </button>
            </TooltipTrigger>
            {isLimit && (
              <TooltipContent className="bg-white text-dark-02 w-40 p-4">
                <p>Has alcanzado el límite de tarjetas</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};
