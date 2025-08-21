import axios from "axios";

const API_URL="https://m57hc7wc-5000.inc1.devtunnels.ms/api/Auth/Login"

export const LoginUser = async (email, password) => {
  const response = await axios.post(API_URL,{ email, password });
  return response.data; // token + user info
};