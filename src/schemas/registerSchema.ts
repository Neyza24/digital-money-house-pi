import { z } from "zod";

export const registerUserSchema = z
  .object({
    firstName: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(50, { message: "Name must be at most 50 characters" })
      .trim(),

    lastName: z
      .string({
        required_error: "Lastname is required",
      })
      .min(3, { message: "Lastname must be at least 3 characters" })
      .max(50, { message: "Lastname must be at most 50 characters" })
      .trim(),

    dni: z
      .string({
        required_error: "DNI is required",
      })
      .regex(/^\d+$/, { message: "DNI must contain only numbers" }) // Asegura que solo tenga números
      .length(8, { message: "DNI must be 8 digits" }) // Ajusta la cantidad de dígitos si es necesario
      .transform((val) => parseInt(val)), // Convierte el string en número

    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Invalid email format" }) // Valida que sea un email correcto
      .trim(),

    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, { message: "Password must be at least 6 characters" }) // Define longitud mínima
      .max(100, { message: "Password must be at most 100 characters" }) // Define longitud máxima
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      }) // Debe tener al menos una mayúscula
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      }) // Debe tener al menos una minúscula
      .regex(/\d/, { message: "Password must contain at least one number" }) // Debe tener al menos un número
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }), // Debe tener al menos un caracter especial

    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(6, { message: "Confirm password must be at least 6 characters" })
      .max(100, { message: "Confirm password must be at most 100 characters" })
      .regex(/[A-Z]/, {
        message: "Confirm password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Confirm password must contain at least one lowercase letter",
      })
      .regex(/\d/, {
        message: "Confirm password must contain at least one number",
      })
      .regex(/[\W_]/, {
        message: "Confirm password must contain at least one special character",
      }),
    phone: z
      .string({
        required_error: "Phone number is required",
      })
      .regex(/^\d{9,15}$/, {
        message: "Phone number must contain between 9 and 15 digits",
      }) // Valida rango de dígitos
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
