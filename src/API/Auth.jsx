import { jwtDecode } from "jwt-decode";

export  function getUserFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return {
      email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
      role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
      exp: decoded.exp,
    };
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }
}
