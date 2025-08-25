import axios from "axios";
import config from "./config";
const API_URL = config.apiUrl;

export const RoomData=(id)=>{
    const token=localStorage.getItem('token')
    return axios.get(`${API_URL}/Dashboard/ManageRoom/${id}`,
    
     {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
)}

export const AddRoom=async(hostelId,roomNo)=>{
     const token=localStorage.getItem("token")
     return await axios.post(`${API_URL}/Room`,
        {roomNo,hostelId},
        {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
     )
}

export const DeleteRoom=async(id)=>{
    const token=localStorage.getItem("token")
    return await axios.delete(`${API_URL}/Room/${id}`,
        {
            headers:{
                Authorization: `bearer ${token}`
            }
        }
    )
    
}