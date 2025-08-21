import axios from "axios";

const API_URL="https://m57hc7wc-5000.inc1.devtunnels.ms/api"
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
