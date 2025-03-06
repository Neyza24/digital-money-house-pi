
"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useAccountsCards } from '@/hooks/useAccountsCards'
import { useAuth } from '@/hooks/useAuth'
import { ItemCard } from './itemCard'


export const ListCards = () => {
    const {accountData} = useAuth()
    const {cards, loading, error} = useAccountsCards(accountData?.id || null);

    console.log(cards, accountData?.user_id)

    if (loading) return <p>Cargando tarjetas...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold">Tus tarjetas</CardTitle>
        </CardHeader>
        <CardContent>
            {cards.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}

        <hr className="border-t-2 bg-slate-300 border-slate-300 mt-3" />
        </CardContent>

    </Card>
  )
}