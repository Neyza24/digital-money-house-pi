import { ItemCardProps } from '@/hooks/useAccountsCards'
import React from 'react'
import { Button } from '../ui/button'

export const ItemCard = ({item}: ItemCardProps) => {

  const sliceNumber = String(item.number_id).slice(-4)
  return (
    <div className="space-y-3">
    <hr className="border-t-2 bg-slate-300 mt-3 border-slate-300" />
    <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
            <div className="p-3 md:p-[15px] h-2 w-2 rounded-full bg-primary inline-block"></div>
            <p className="inline-block text-sm md:text-base">Terminada en {sliceNumber}</p>
        </div>
        <div className="flex flex-col text-end">
            <Button
                variant="ghost"
                className="text-sm md:text-base font-bold"
              >
                Eliminar
              </Button>
        </div>
    </div>
</div>
  )
}