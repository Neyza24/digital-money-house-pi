import { z } from "zod";


export const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).trim(),
});


export const passwordSchema = z.object({
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 6 caracteres")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
      message: "Contraseña inválida",
    }),
});
