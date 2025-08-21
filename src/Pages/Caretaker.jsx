import React from "react";
import Header from "../components/Header";
import ViewComplaints from "./ViewComplaints";
const Caretaker=()=>{
return(
<>

    <Header role={Caretaker}/>
<div className="p-1.5">
        <ViewComplaints/>
</div>
</>
)}

export default Caretaker;