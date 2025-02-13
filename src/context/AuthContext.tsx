'use client'
import { api } from "@/lib/axios";
import SetCookieServerSide, { RemoveCookieServerSide } from "@/lib/cookies";
import { AccountData, AuthContextType, RegisterUserData, SessionUser } from "@/types/auth";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const BaseRegisterData = {
	firstName: '',
	lastName: '',
	dni: 0,
	email: '',
	password: '',
	confirmPassword: '',
	phone: '',
}

const BaseAccountData = {
	alias: '',
	cvu: '',
	id: 0,
	user_id: 0,
	available_amount: 0,
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState< SessionUser  | null>(null);
  const [registerData, setRegisterData] = useState<RegisterUserData>(BaseRegisterData)
  const [accountData, setAccountData] = useState<AccountData | null>(BaseAccountData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string>("");
  const router = useRouter();


  const getUserDataById = async (userId: number) => {
    try {
      const response = await api.get(`users/${userId}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setLoading(false);
      setUser(response.data); // Guardamos los datos en el contexto
  
    } catch (error) {
      console.error("Error al obtener datos del usuario:", error);
    }
  };

  const getUserAccount = async () => {
    try {
      const response = await api.get('account', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setLoading(false);
      setAccountData(response?.data);
      return response.data;
      // return response.data?.user_id || null;

    } catch (error) {
      console.error("Error al obtener la cuenta del usuario:", error);
      setAccountData(null)
    }
  };
  
  

  const loginUser = async (email: string, password: string) => {
    
    setLoading(true);
    try {
      const response = await api.post('login', { email, password });
      const { token } = response.data;
      if (token) {
				SetCookieServerSide({ name: 'token', value: response.data.token })
				await localStorage.setItem('token', response.data.token)
				const accountData = await getUserAccount()
        console.log(accountData);
				await getUserDataById(accountData.user_id );
      
				router.push('/dashboard')
			}
  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response?.data?.message || "Error en el login");
    } finally {
      setLoading(false);
    }
  };


  const registerUser = async (userData: RegisterUserData) => {
    
    setError(null);
    try {
      const { confirmPassword, ...dataToSend } = userData;
      setRegisterData(userData);
      setLoading(true);
      await api.post('users', dataToSend);
  
      // const userDataResponse = response.data; // La respuesta incluye user_id
      // setUser(userDataResponse); // Guardamos en el contexto
  
      // Cookies.set('user_id', userDataResponse.user_id.toString()); // Guardamos en Cookies
      router.push("/login");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response?.data?.message || "Error en el registro");
    } finally {
      setLoading(false);
    }
  };
  

  // Función para cerrar sesión
  const logoutUser = async () => {
    setUser(null);
    localStorage.removeItem('token')
		await RemoveCookieServerSide({ name: 'token' })
    setAccountData(null)
    router.push("/");
  };


  useEffect(() => {
    const hydrateAccountData = async () => {
      try {
        const userAccountData = await getUserAccount();
        await getUserDataById(userAccountData.user_id);
      } catch (error) {
        console.error(`Error al obtener datos de la cuenta: ${error} `)
        router.push("/")
      }
    }

    const token = localStorage.getItem('token');

    if(token) {
      hydrateAccountData();
    } else {
      RemoveCookieServerSide({ name: 'token' });
    }
  }, [])


  return (
    <AuthContext.Provider value={{ user, error, setUser, email, setEmail, registerUser, loginUser, logoutUser, accountData, isAuth: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
