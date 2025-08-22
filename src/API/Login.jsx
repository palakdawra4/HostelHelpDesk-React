import axios from "axios";
import config from "./config";
const API_URL = config.apiUrl;

export const LoginUser = async (email, password) => {  
  const response = await axios.post(`${API_URL}/Auth/Login`, { email, password });

  return response.data; // token + user info
};