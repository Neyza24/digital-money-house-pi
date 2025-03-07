"use client";

import { useAccountsCards } from "@/hooks/useAccountsCards";
import { useAuth } from "@/hooks/useAuth";
import { ListCards } from "@/components/cards/listCards";
import { AddNewCard } from "@/components/cards/addNewCard";


export default function CardsPage() {
  const { accountData } = useAuth();
  const { cards, loading, error, deleteCard } = useAccountsCards(accountData?.id || null);
  const lengthCards = cards.length;

  const LIMIT_CARDS = 10;

  const isLimit = lengthCards >= LIMIT_CARDS;

  console.log(cards, accountData?.user_id);

  if (loading) return <p>Cargando tarjetas...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="flex-col space-y-4">
      <AddNewCard isLimit={isLimit} />
      <ListCards cards={cards} deleteCard={deleteCard}/>
    </section>
  );
}