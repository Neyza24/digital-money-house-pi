

export interface RegisterUserData {
    firstName: string;
    lastName: string;
    dni: string;
    email: string;
    password: string;
    confirmPassword?: string;
    phone: string | number;
}

export interface LoginUserData {
    email: string;
    password: string;
}


export interface AuthContextProps {
    registerData: RegisterUserData
	error: ErrorMessageType
	loading: boolean
	handleRegisterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => void

}

export interface ErrorResponseApi {
	response?: { [key: string]: string[] | number | string }
}