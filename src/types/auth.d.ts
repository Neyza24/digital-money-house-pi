import { z } from "zod";
import { registerUserSchema} from "@/schemas/registerSchema";
// import { profileSchema } from "@/schemas/profileSchema";

// Inferimos el tipo a partir de Zod
export type RegisterUserData = z.infer<typeof registerUserSchema>;
// export type ProfileUserData = z.infer<typeof profileSchema>;


export interface User {
  user_id: number;
  account_id: number;
  email: string;
}

export interface ProfileUserData {
  firstname: string;
  lastname: string;
  email: string;
  dni: number;
  phone: string;
  password: string;
}

export interface UpdateUserData {
  firstname?: string;
  lastname?: string;
  email?: string;
  dni?: number;
  phone?: string;
  password?: string;
}

export interface SessionUser {
	dni: number
	email: string
	firstname: string
	id?: number
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
  loading: boolean;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  updateUserData: (profileData: ProfileUserData, user_id: number) => Promise<void>;
  //registerData: RegisterUserData;
}

export interface PostLoginData {
	email: string
	password: string
}

export interface PostLoginResponse {
  token: string
  error?: string
}

export interface AuthErrorResponse {
  error: string;
}

export interface ErrorResponse {
	response?: { [key: string]: string[] | number | string }
}


export interface HeaderContextType {
  variant: HeaderVariant;
  setVariant: (variant: HeaderVariant) => void;
}

export interface MenuItemProps {
  href: string;
  name: string;
  closeMenu: () => void;
}

export interface MenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}