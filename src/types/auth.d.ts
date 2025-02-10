import { z } from "zod";
import { registerUserSchema} from "@/schemas/registerSchema";

// Inferimos el tipo a partir de Zod
export type RegisterUserData = z.infer<typeof registerUserSchema>;


export interface User {
  user_id: number;
  account_id: number;
  email: string;
}

export interface FullUser extends User {
  dni: number;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
}

export interface AccountData {
	alias: string
	available_amount: number
	cvu: string
	id: number | undefined
	user_id: number
}

export interface AuthContextType {
  user: User | null;
  registerUser: (userData: RegisterUserData) => Promise<void>;
  accountData: AccountData | null;
  error: string | null;
  setUser: (user: FullUser | null) => void;
  email: string;
  setEmail: (email: string) => void;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
}

export interface LoginData {
	email: string
	password: string
}

export interface AuthErrorResponse {
  error: string;
}

export interface ErrorResponse {
	response?: { [key: string]: string[] | number | string }
}
