
import { Share_Tech_Mono } from "next/font/google";
import Image from "next/image";
import { Card } from '@/components/ui/card'
import { CardComponentProps } from "@/types/cards";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});




export const CardComponent = ({ card, cardType, styleCard }: CardComponentProps) => {
  const normalizeDate = card.expiration_date.replace("20", "");

  const cardImages = {
    visa: "/visa.svg",
    mastercard: "/mastercard.svg",
    amex: "/amex.svg",
    discover: "/discover.svg",
    default: "/chip.svg",
  };

  return (
    <Card
      className={`${shareTechMono.className} mx-auto w-[295px] h-[170px] md:w-[300px] md:h-[180px] bg-gradient-to-tl ${styleCard.bg} rounded-xl flex content-center items-center justify-center shadow-xl shadow-black/30 backdrop-blur-sm bg-opacity-90`}
    >
      <div className="p-4 md;p-5 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            className="absolute right-0 bottom-0 top-0"
            alt=""
            src={cardImages[cardType as keyof typeof cardImages]}
            width={40}
            height={20}
          />
          <div
            className={`flex flex-col w-full h-full justify-end gap-4 ${styleCard.colorText}`}
          >
            <p className="text-[18px]">
              {card.number_id
                ? card.number_id.toString().replace(/\d{4}(?=.)/g, "$& ")
                : "0000 0000 0000 0000"}
            </p>
            <div className="flex justify-between">
              <p className="text-sm uppercase">
                {card.first_last_name || "Nombre de titular"}
              </p>
              <p className="text-sm uppercase">{normalizeDate || "MM/YY"}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
