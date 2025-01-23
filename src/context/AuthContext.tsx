'use client';

import useAuth from "@/hooks/useAuth";
import { AuthContextProps } from "@/interfaces/auth";
// import { useRouter } from "next/navigation";
import { createContext, useContext} from "react";

const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [user, setUser] = useState<User | null>(null);
  // const [token, setToken] = useState<string | null>(null);
  // const isAuthenticated = !!token; // Calculamos isAuthenticated basándonos en el token

  // const router = useRouter();
  const {
    handleRegisterChange,
		error,
		loading,
		handleRegisterSubmit,
    registerData
  } = useAuth();


  const values = {
    error,
    loading,
    handleRegisterChange, 
    handleRegisterSubmit,
    registerData
    
  }


  return <AuthContext.Provider value={values}> {children} </AuthContext.Provider>
};

export const useAuthContext = () => useContext(AuthContext);

