import { z } from "zod";

// Esquema de validación para el email
export const emailSchema = z.object({
  email: z.string().email("Email inválido").min(1, "El email es obligatorio"),
});

// Esquema de validación para la contraseña
export const passwordSchema = z.object({
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
