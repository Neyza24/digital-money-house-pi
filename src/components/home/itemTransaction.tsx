import { ItemTransactionProps } from "@/types/activity";
import { absoluteAmountFormat, formatToTwoDecimals, getDayName } from "@/utils/transactionsHelpers";



export const ItemTransaction = ({ item }: ItemTransactionProps) => {


  const formatGetDay = getDayName(item.dated);
  const amountFormat = formatToTwoDecimals(absoluteAmountFormat(item));

  const displayColor = item.type === "Transaction" ? "text-red-500" : "inherit";
  
  
  return (
    <div className="space-y-3">
        <hr className="border-t-2 bg-slate-300 mt-3 border-slate-300" />
        <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
                <div className="p-3 md:p-[15px] h-2 w-2 rounded-full bg-primary inline-block"></div>
                <p className="inline-block text-sm md:text-base">{item.description}</p>
            </div>
            <div className="flex flex-col text-end">
                <span className={`text-sm md:text-base ${displayColor}`}>{amountFormat}</span>
                <span className="text-slate-500 text-[12px] md:text-sm">{formatGetDay}</span>
            </div>
        </div>
    </div>
  )
}

