import axios from "axios";
import config from "./config";
const API_URL = config.apiUrl;
export const ManageData=()=>axios.get(`${API_URL}/Dashboard/ManageHostel`)



export const AddData=async(hostelName)=>{
        const token = localStorage.getItem('token');
        return await axios.post(
            `${API_URL}/Hostel/add`,
            {hostelName},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
    };




export const DeleteData = async (id) => {
  try {
    // Get token from localStorage (or wherever you stored it after login)
    const token = localStorage.getItem("token");

    const response = await axios.delete(`${API_URL}/Hostel/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ send token in header
      },
    });

    return response.data;
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};
