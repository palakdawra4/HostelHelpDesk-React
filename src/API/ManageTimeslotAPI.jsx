import axios  from "axios";

const API_URL="https://m57hc7wc-5000.inc1.devtunnels.ms/api"

export const GetTimeslot=async()=>{

    const token=localStorage.getItem("token");
    return  await axios.get(`${API_URL}/Dashboard/ManageTimeslot`,
    {
        headers:{
            Authorization:`bearer ${token}`
        }
    }
)}


export const AddTimeslot=async(startTime,endTime)=>{
const token=localStorage.getItem('token')
return await axios.post(`${API_URL}/Timeslot`,{startTime,endTime},
    {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
)

}


export const DeleteTimeslot=async(id)=>{
const token=localStorage.getItem('token')
return await axios.delete(`${API_URL}/Timeslot/${id}`,
    {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
)
}