import axios from "axios";
 

const API_URL="https://m57hc7wc-5000.inc1.devtunnels.ms/api"
export const GetStudent=async()=>{
    const token =localStorage.getItem('token');
    return await axios.get(`${API_URL}/User/GetAllStudents`,
        {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
    )
}