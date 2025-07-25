

import { ItemCard } from './itemCard'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CardDeleteProps } from '@/types/cards';



export const ListCards = ({cards, deleteCard}: CardDeleteProps) => {

  return (
    <Card className='shadow-md'>
        <CardHeader>
          <CardTitle className="text-base font-bold">Tus tarjetas</CardTitle>
        </CardHeader>
        <CardContent>
            {cards.map((item) => (
                <ItemCard key={item.id} item={item} deleteCard={deleteCard} />
            ))}
        <hr className="border-t-2 bg-slate-300 border-slate-300 mt-3" />
        </CardContent>
    </Card>
  )
}