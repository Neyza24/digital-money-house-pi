

import { BalanceCard } from "@/components/home/balanceCard";
import { ListTransactions } from "@/components/home/listTransactions";
import { WalletButtons } from "@/components/home/walletButtons";


export default function HomePage() {

    return (
      <section className="flex-col space-y-4">
        <h1>Inicio</h1>
        <BalanceCard />
        <WalletButtons />
        <ListTransactions />
      </section>
    );
}