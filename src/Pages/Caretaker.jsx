import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ViewComplaints from "./ViewComplaints";
import { Complaints } from "../API/ComplaintsAPI";



const Caretaker=()=>{
const [complaints,setcomplaints]=useState([])


    useEffect(()=>{
        Complaints()
        .then((res=>{setcomplaints(res.data)}))
        .catch((err)=>console.log(err))
    },[])
return(
<>

    <Header role={Caretaker}/>
<div className="p-1.5">
        <ViewComplaints complaints={complaints} usertype={"Caretaker"}/>
</div>
</>
)}

export default Caretaker;