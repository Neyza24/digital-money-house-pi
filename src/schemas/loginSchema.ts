import { z } from "zod";

// Esquema de validación para el email
export const emailSchema = z.object( {
  email: z.string().email({ message: "Invalid email format" }).trim(),
} )

// Esquema de validación para la contraseña
export const passwordSchema = z.object( {
  password: z.string().min( 8, 'La contraseña debe tener al menos 6 caracteres' ).regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, { message: 'Contraseña inválida' } ),
} )
