import { z } from "zod";

export const cardSchema = z.object({
  first_last_name: z.string().min(3, "Debe tener al menos 3 caracteres"),
  number_id: z
    .string()
    .regex(/^\d+$/, "Debe contener solo números")
    .transform((val) => Number(val)),
  expiration_date: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/(20\d{2})$/, "Formato MM/YYYY inválido"),
  cod: z
    .string()
    .regex(/^\d+$/, "Debe contener solo números")
    .transform((val) => Number(val)),
});
  