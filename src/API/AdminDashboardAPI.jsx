import axios from "axios";
import config from "./config";
const API_URL = config.apiUrl;

export const HostelData=()=>{
    const token=localStorage.getItem('token')
    return axios.get(`${API_URL}/Dashboard/GetHostelData`,
     {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
)}
