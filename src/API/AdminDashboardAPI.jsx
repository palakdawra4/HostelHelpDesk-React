import axios from "axios";
import config from "./config";
const API_URL = config.apiUrl;

export const HostelData=()=>axios.get(`${API_URL}/Dashboard/GetHostelData`)
