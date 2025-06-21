
'use client'

import { useAuth } from "@/hooks/useAuth";
import { useAccountsCards } from "@/hooks/useAccountsCards";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cardSchema } from "@/schemas/cardSchema";
import { FormCardProps, NewCard,} from "@/types/cards";
import { detectCardType } from "@/utils/detectCardType";



export const FormCard = ({ card, styleCard, setCard, setCardType, setCardColor }: FormCardProps) => {

        const { accountData } = useAuth();
        const { cards, postNewCard } = useAccountsCards(accountData?.id || null);

        const account_id = accountData?.id;

        const form = useForm<z.infer<typeof cardSchema>>({
          resolver: zodResolver(cardSchema),
          mode: "onChange",
          defaultValues: card,
        });

  

        
//    <p className="p-4 rounded-sm border border-red-500 bg-red-200 text-red-500">Esta tarjeta ya esta registrada</p>

      
        // Manejar cambios en los inputs para actualizar la tarjeta visualmente
        const handleInputChange = (
          field: keyof z.infer<typeof cardSchema>,
          value: string
        ) => {
          setCard((prev) => ({ ...prev, [field]: value }));

          if (field === "number_id") {
            const cardTypeDetected = detectCardType(value);
            setCardType(cardTypeDetected);

            if(cards.find((card) => card.number_id == Number(value))) {
              //debo retornar el mensaje 
            }

          }

          if (value.trim() !== "") {
            setCardColor({
              ...styleCard,
              colorText: "text-white",
              bg: "from-zinc-900 via-neutral-700 to-zinc-950",
            });
          }
        };

  
        console.log(form.getValues().number_id)
        

    



        const onSubmit = async (data: NewCard) => {
          const formattedData = {
            ...data,
            number_id: Number(data.number_id),
            cod: Number(data.cod),
          };

          if (accountData && account_id) {
            await postNewCard(formattedData, account_id);

            toast.success("Tarjeta creada exitosamente", {
              duration: 5000,
              position: "top-right",
            });
          } 
        
        };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        
        {/* Número de Tarjeta */}
        <FormField
          control={form.control}
          name="number_id"
          render={({ field }) => (
            <FormItem>
              <Input {...field} maxLength={16} onChange={(e) => {
                const value = e.target.value;
                field.onChange(e);
                handleInputChange("number_id", value);
                setCardType(detectCardType(value));
              }} 
              value={field.value || ""}
              placeholder="Número de la tarjeta*" 
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nombre en la Tarjeta */}
        <FormField
          control={form.control}
          name="first_last_name"
          render={({ field }) => (
            <FormItem>
              <Input {...field} onChange={(e) => {
                field.onChange(e);
                handleInputChange("first_last_name", e.target.value);
              }} 
              placeholder="Nombre y Apellido*" 
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Fecha de Expiración */}
        <FormField
          control={form.control}
          name="expiration_date"
          render={({ field }) => (
            <FormItem>
              <Input {...field} placeholder="Fecha de vencimiento*" onChange={(e) => {
                field.onChange(e);
                handleInputChange("expiration_date", e.target.value);
              }}
              />
              <FormMessage />
            </FormItem>
          )}
        />


        {/* Código de Seguridad */}
        <FormField
          control={form.control}
          name="cod"
          render={({ field }) => (
            <FormItem>
              <Input {...field} maxLength={3} type="text" onChange={(e) => {
                field.onChange(e);
                handleInputChange("cod", e.target.value);
              }} 
              value={field.value || ""}
              placeholder="Código de seguridad*" />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" type="submit" disabled={!account_id} className="md:col-start-2">Continuar</Button>
      </form>
    </Form>
  )
}
