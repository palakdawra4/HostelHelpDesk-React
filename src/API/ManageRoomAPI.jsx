import axios from "axios";

const API_URL="https://m57hc7wc-5000.inc1.devtunnels.ms/api"

export const RoomData=(id)=>axios.get(`${API_URL}/Dashboard/ManageRoom/${id}`)

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