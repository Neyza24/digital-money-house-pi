'use client'
import { api } from "@/lib/axios";
import SetCookieServerSide, { RemoveCookieServerSide } from "@/lib/cookies";
import { AccountData, AuthContextType, FullUser, RegisterUserData } from "@/types/auth";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";


const BaseAccountData = {
	alias: '',
	cvu: '',
	id: 0,
	user_id: 0,
	available_amount: 0,
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState< FullUser | null>(null);
  const [accountData, setAccountData] = useState<AccountData | null>(BaseAccountData);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();


  // const fetchUserData = async (userId: string) => {
  //   try {
  //     const response = await api.get(`users/${userId}`, {
  //       headers: {
  //         Authorization: localStorage.getItem('token'),
  //       },
  //     });
  
  //     setUser(response.data); // Guardamos los datos en el contexto
  
  //   } catch (error) {
  //     console.error("Error al obtener datos del usuario:", error);
  //   }
  // };

  const fetchUserAccount = async () => {
    try {
      const response = await api.get('account', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      setAccountData(response?.data);

      return response.data?.user_id || null;

    } catch (error) {
      console.error("Error al obtener la cuenta del usuario:", error);
      return null;
    }
  };



  const registerUser = async (userData: RegisterUserData) => {
    try {
      const { confirmPassword, ...dataToSend } = userData;
      const response = await api.post('users', dataToSend);
  
      const userDataResponse = response.data; // La respuesta incluye user_id
      setUser(userDataResponse); // Guardamos en el contexto
  
      Cookies.set('user_id', userDataResponse.user_id.toString()); // Guardamos en Cookies
      router.push("/login");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response?.data?.message || "Error en el registro");
    }
  };
  

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await api.post('login', { email, password });
      const { token } = response.data;

      if (token) {
				SetCookieServerSide({ name: 'token', value: response.data.token })
				await localStorage.setItem('token', response.data.token)
				const accountData = await fetchUserAccount()
        console.log(accountData);
				// await fetchUserData(accountData.user_id );
      
				router.push('/dashboard')
			}
  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.response?.data?.message || "Error en el login");
    }
  };
  

  // Función para cerrar sesión
  const logoutUser = async () => {
    
    localStorage.removeItem('token')
		await RemoveCookieServerSide({ name: 'token' })
    setAccountData(null)
    router.push("/login");
  };


  return (
    <AuthContext.Provider value={{ user, error, setUser, email, setEmail, registerUser, loginUser, logoutUser, accountData }}>
      {children}
    </AuthContext.Provider>
  );
};
