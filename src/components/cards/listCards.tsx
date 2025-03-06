

import { CardData, } from '@/hooks/useAccountsCards'
import { ItemCard } from './itemCard'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'


interface Props {
  cards: CardData[];
}

export const ListCards = ({cards}: Props) => {
    

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