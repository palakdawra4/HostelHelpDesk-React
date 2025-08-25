import axios from "axios";
import config from "./config";

export const Complaints=async()=>{
    const token =localStorage.getItem('token')
    return await axios.get(`${config.apiUrl}/Complaints/GetUserComplaints`,
        {
            headers:
            {
                Authorization:`bearer ${token}`
            }
        }
    )
    
}

export const AddComplaint=async(ComplaintTypeId,TimeslotId,Description)=>{
    const token=localStorage.getItem('token')
    return await axios.post(`${config.apiUrl}/complaints/CreateComplaint`,{ComplaintTypeId,TimeslotId,Description},
        {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
    )

}

export const GetComplaitType=async()=>{
    const token=localStorage.getItem('token')
    return await axios.get(`${config.apiUrl}/ComplaintTypeWorkerType/ComplaintTypes`,
        {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
    )

}

export const UpdateComplaint=async(id)=>{
    const token=localStorage.getItem('token')
    return await axios.put(`${config.apiUrl}/Complaints/UpdateComplaint/${id}`,{},
        {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
    )

}


