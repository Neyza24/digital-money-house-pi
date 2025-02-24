

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

  interface ItemTransactionProps {
    item: DataTransaction;
  }

export const ItemTransaction = ({ item }: ItemTransactionProps) => {
  return (
    <div className="space-y-3">
        <hr className="border-t-2 bg-slate-300 mt-3 border-slate-300" />
        <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
                <div className="p-3 md:p-[15px] h-2 w-2 rounded-full bg-primary inline-block"></div>
                <p className="inline-block text-sm md:text-base">{item.description}</p>
            </div>
            <div className="flex flex-col text-end">
                <span className="text-sm md:text-base">{item.amount}</span>
                <span className="text-slate-500 text-[12px] md:text-sm">{item.dated}</span>
            </div>
        </div>
    </div>
  )
}

