
'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import endpoints from '@/app/api/endpoints';
import { RegisterUserData, ErrorResponseApi } from '@/interfaces/auth';
import { ErrorMessage } from '@/interfaces/message';
import useErrorApi from './useErrorApi';
// import { validateFieldsRequired, validatePassword } from '@/app/utils/validations';
import { ApiError } from 'next/dist/server/api-utils';

type ErrorMessageType = ErrorMessage | null | string | object


// Default values
const DefaultRegisterData = {
  firstName: "",
  lastName: "",
  dni: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
};


export const errorMessages: ErrorMessage = {
	userNotExist: 'Usuario inexistente. Vuelve a intentarlo.',
	incorrectPassword: 'Contraseña incorrecta. Vuelve a intentarlo.',
	loginError:
		'Ha ocurrido un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.',
	registerError:
		'Ha ocurrido un error al intentar registrar el usuario. Por favor, inténtalo de nuevo.',
	emailVerificationError:
		'Ha ocurrido un error al intentar verificar el email. Por favor, inténtalo de nuevo.',
	userAlreadyExists: 'El usuario ya existe. Por favor, inicia sesión.',
	defaultError: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.',
}


const useAuth = () => {

  const router = useRouter();
  const { ErrorHandelerApi } = useErrorApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorMessageType>(null);
	const [registerData, setRegisterData] = useState<RegisterUserData>(DefaultRegisterData);


  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const setValue = name === "dni" ? Number(value) : value;
    setRegisterData({ ...registerData, [name]: setValue });
  };

  const handleError = (
    error: ErrorResponseApi,
    errorCode: number,
    errorMessageKey: string,
    isObject: boolean
  ) => {
    let errorOutput: ErrorMessageType = errorMessages.defaultError;
    if(error.response && error.response.status === errorCode) {
      errorOutput = isObject ? {
        [errorMessageKey]: errorMessages[errorMessageKey]
      } : errorMessages[errorMessageKey]
    }
    setError(errorOutput)
    

  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    // const errors = validateFieldsRequired(registerData);
    // const passwordError = validatePassword(registerData.password)
    
    // if(passwordError) {
    //   errors.password = passwordError
    // }

    // if(Object.keys(errors).length > 0) {
    //   setError(errors);
    //   return
    // }

    try{
      setRegisterData(DefaultRegisterData);
      setLoading(true);
      await axios.post(endpoints.REGISTER, registerData);
      router.push('/login');
    } catch (error) {
      const apiError = error as ApiError;
      const errorResponse = error as ErrorResponseApi;
      handleError(errorResponse, 409, 'User already exists', true);
      ErrorHandelerApi(apiError);
    } finally {
      setLoading(false)
    }
  }
  

  return {
		handleRegisterChange,
		error,
		loading,
		handleRegisterSubmit,
    registerData
	}
}

export default useAuth