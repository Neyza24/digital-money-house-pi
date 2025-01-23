import { RegisterUserData } from "@/interfaces/auth";
import axios from "axios";

const API_BASE_URL = "https://digitalmoney.digitalhouse.com/api";

interface RegisterResponse {
  success: boolean;
  message: string;
}

export const registerUser = async (userData: RegisterUserData): Promise<RegisterResponse> => {

  const{confirmPassword, ...data} = userData;
  console.log('dataantes de ser enviada en el service', data);
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, data);
    return response.data;

  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }


};