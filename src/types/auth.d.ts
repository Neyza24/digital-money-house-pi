import { z } from "zod";
import { registerUserSchema} from "@/schemas/registerSchema";

// Inferimos el tipo a partir de Zod
export type RegisterUserData = z.infer<typeof registerUserSchema>;


export interface User {
  user_id: number;
  account_id: number;
  email: string;
}

export interface SessionUser {
	dni: number
	email: string
	firstname: string
	id: number
	lastname: string
	phone: string
	password: string
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
  user: SessionUser | null;
  registerUser: (userData: RegisterUserData) => Promise<void>;
  accountData: AccountData | null;
  error: string | null;
  setUser: (user: SessionUser | null) => void;
  email: string;
  setEmail: (email: string) => void;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
  isAuth: boolean;
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
