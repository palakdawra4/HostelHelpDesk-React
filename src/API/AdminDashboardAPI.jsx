import axios from "axios";

const API_URL="https://m57hc7wc-5000.inc1.devtunnels.ms/api/Dashboard"

export const HostelData=()=>axios.get(`${API_URL}/GetHostelData`)
