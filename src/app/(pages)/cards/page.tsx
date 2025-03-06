import { AddNewCard } from "@/components/cards/addNewCard";
import { ListCards } from "@/components/cards/listCards";

export default function CardsPage() {

    return (
        <section className="flex-col space-y-4">
            <AddNewCard />
            <ListCards />
        </section>
    )
}