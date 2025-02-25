export interface DataTransaction {
    account_id: number;
    amount: number;
    dated: string;
    description: string;
    destination: string;
    id: number;
    origin: string;
    type: string;
}


export interface ItemTransactionProps {
    item: DataTransaction;
}


export interface FormattedAmount {
  amount: number;
  color?: string;
}