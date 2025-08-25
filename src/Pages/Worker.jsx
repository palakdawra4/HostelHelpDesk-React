import { useEffect, useState } from "react";
import Header from "../components/Header"
import { Complaints, UpdateComplaint } from "../API/ComplaintsAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";


const Worker=()=>{
const [complaints,setcomplaints]=useState([])
// const [toggle,settoggle]=useState(false)

useEffect(()=>{
  Complaints()
  .then((res)=>{setcomplaints(res.data) 
    console.log(res.data)})

  .catch((err)=>console.log(err))
},[])


const handleStatus=(id)=>{
  UpdateComplaint(id)
  .then((res)=>{console.log(res.data)
    if (res.data === true) {
          // update only that complaint in local state
          setcomplaints((prev) =>
            prev.map((c) =>
              c.complaintNo === id ? { ...c, isCompleted: !c.isCompleted } : c
            )
          );
        }
  })
  .catch((err)=>console.log(err))

}

    return(
        <>
        <Header role={"Worker"}/>
       
<div className="p-1.5">
<table className="w-full border border-gray-300 bg-white  ">
        <thead className="bg-gray-200">
          <tr >
            <th className="border px-4 py-2">Student Name</th>
            <th className="border px-4 py-2">Complaint ID</th>
            <th className="border px-4 py-2">Complaint Type</th>
            <th className="border px-4 py-2">Made on</th>
            <th className="border px-4 py-2">Closed on</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Worker</th>
            <th className="border px-4 py-2">Timeslot</th>
            <th className="border px-4 py-2">Roomno</th>
            <th className="border px-4 py-2">Hostelname</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.complaintNo} className="text-center">
               <td className="border px-4 py-2">{c.studentName}</td>
              <td className="border px-4 py-2">{c.complaintNo}</td>
              <td className="border px-4 py-2">{c.type}</td>
              <td className="border px-4 py-2">{c.created}</td>
              <td className="border px-4 py-2">{c.closed || "-"}</td>
              <td className="border px-4 py-2">{c.description}</td>
              <td className="border px-4 py-2">{c.workerName || "-"}</td>
              <td className="border px-4 py-2">{c.timeslot}</td>
              <td className="border px-4 py-2">{c.roomNo}</td>
              <td className="border px-4 py-2">{c.hostelName}</td>
              {/* <td className="border px-4 py-2">{c.status}</td> */}
              <td className="border px-4 py-2 ">
              {c.isCompleted &&(
                <> 
                <FaToggleOn className="text-3xl" />
                </>
              )
              }
              {!c.isCompleted &&(
                <> 
                <FaToggleOff className="text-3xl" onClick={()=>handleStatus(c.complaintNo)}/>
                </>
              )
              }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </>

    )

}
export default Worker;