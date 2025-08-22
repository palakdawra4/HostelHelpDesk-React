import axios from "axios";
 import config from "./config";
const API_URL = config.apiUrl;

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

export const GetWorker=async()=>{
    const token =localStorage.getItem('token');
    return await axios.get(`${API_URL}/User/GetAllWorkers`,
        {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
    )
}

export const GetCaretaker=async()=>{
    const token =localStorage.getItem('token');
    return await axios.get(`${API_URL}/User/GetAllCaretakers`,
        {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
    )
}

export const GetWorkerTypes=async()=>{
    const token =localStorage.getItem('token');
    return await axios.get(`${API_URL}/ComplaintTypeWorkerType/WorkerTypes`,
        {
            headers:{
                Authorization:`bearer ${token}`
            }
        }
    )
}

export const AddStudent = async (firstName, lastName, phoneNumber, email, password, rollNo, hostelId, roomId) => {
    const token = localStorage.getItem('token');
    return await axios.post(
        `${API_URL}/Auth/AddStudent`,
        {firstName, lastName, phoneNumber, email, password, rollNo, hostelId, roomId},
        {
            headers: {
                Authorization: `bearer ${token}`
            }
        }
    )
}

export const AddCaretaker = async (firstName, lastName, phoneNumber, email, password, hostelId) => {
    const token = localStorage.getItem('token');
    return await axios.post(
        `${API_URL}/Auth/AddCaretaker`,
        {firstName, lastName, phoneNumber, email, password, hostelId},
        {
            headers: {
                Authorization: `bearer ${token}`
            }
        }
    )
}

export const AddWorker = async (firstName, lastName, phoneNumber, email, password, workerSpecialization) => {
    const token = localStorage.getItem('token');
    return await axios.post(
        `${API_URL}/Auth/AddWorker`,
        {firstName, lastName, phoneNumber, email, password, workerSpecialization},
        {
            headers: {
                Authorization: `bearer ${token}`
            }
        }
    )
}

export const DeleteStudent = async (id) => {
    const token = localStorage.getItem('token');
    return await axios.delete(
        `${API_URL}/User/DeleteStudent`,
        {id},
        {
            headers: {
                Authorization: `bearer ${token}`
            }
        }
    )
}

export const DeleteWorker = async (id) => {
    const token = localStorage.getItem('token');
    return await axios.delete(
        `${API_URL}/User/DeleteWorker`,
        {id},
        {
            headers: {
                Authorization: `bearer ${token}`
            }
        }
    )
}

export const DeleteCaretaker = async (id) => {
    const token = localStorage.getItem('token');
    return await axios.delete(
        `${API_URL}/User/DeleteCaretaker`,
        {id},
        {
            headers: {
                Authorization: `bearer ${token}`
            }
        }
    )
}

export const DeleteUser = async (id) => {
    const token = localStorage.getItem('token');
    return await axios.delete(
        `${API_URL}/User/DeleteUser/${id}`,
        {
            headers: {
                Authorization: `bearer ${token}`
            }
        }
    )
}