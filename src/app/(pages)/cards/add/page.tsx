"use client"

import { useState } from "react";
import { CardComponent } from "@/components/cards/add/cardComponent";
import { FormCard } from "@/components/cards/add/formCard";
import { NewCard, StylesCard } from "@/types/cards";



const initialCardData: NewCard= {
    cod: 0,
    expiration_date: "",
    first_last_name:"",
    number_id: 0,
}

const defaultStyles: StylesCard = {
    bg: "from-gray-400 via-gray-300 to-gray-400",
    colorText: "gray-500",
}


export default function AddCardPage() {
    

    //local state
    const [newCard, setNewCard] = useState<NewCard>(initialCardData);
    // Estado adicional para tipo de tarjeta y color dinámico
    const [cardType, setCardType] = useState<"visa" | "mastercard" | "amex" | "discover" | "default">("default");
    const [cardColor, setCardColor] = useState(defaultStyles); 


    return (
        <section className="flex flex-col space-y-8 bg-white rounded-lg p-5 md:p-7">
        
            <CardComponent card={newCard} cardType={cardType} styleCard={cardColor}/>
            <FormCard card={newCard} setCard={setNewCard} setCardType={setCardType} setCardColor={setCardColor} styleCard={cardColor}/>
        </section>
    )
}