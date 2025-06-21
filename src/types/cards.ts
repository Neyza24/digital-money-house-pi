export interface CardData {
    account_id: number;
    cod: number;
    expiration_date: string;
    first_last_name: string;
    id: number;
    number_id: number;
}

export interface NewCard {
    cod: number;
    expiration_date: string;
    first_last_name: string;
    number_id: number;
}

export interface CardDelete {
    card_id: number;
    account_id: number;
}

// export interface NewCardProp {
//   newCard: NewCard;
//   setNewCard: React.Dispatch<React.SetStateAction<NewCard>>;
// }

export interface ItemCardProps {
    item: CardData;
    deleteCard: (data: CardDelete) => void;
}

export interface StylesCard {
    bg: string;
    colorText: string;
}

export interface FormCardProps {
  card: NewCard;
  styleCard: StylesCard;
  setCard: React.Dispatch<React.SetStateAction<NewCard>>;
  setCardType: React.Dispatch<React.SetStateAction<"visa" | "mastercard" | "amex" | "discover" | "default">>;
  setCardColor: React.Dispatch<React.SetStateAction<StylesCard>>;
}

export interface CardComponentProps {
    card: NewCard;
    cardType: "visa" | "mastercard" | "amex" | "discover" | "default";
    styleCard: StylesCard;
}

export interface CardDeleteProps {
    cards: CardData[];
    deleteCard: ({account_id, card_id}: CardDelete) => void;
  }