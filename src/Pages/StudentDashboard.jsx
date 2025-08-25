import {React,useEffect,useState} from "react";
import RaiseComplaint from "./RaiseComplaint";
import Header from "../components/Header";
import { FaXmark } from "react-icons/fa6"; 
import ViewComplaints from "./ViewComplaints";
import { Complaints } from "../API/ComplaintsAPI";


const StudentDashboard = () => {
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [complaints,setcomplaints]= useState ([]);

  useEffect(()=>{
  Complaints()
  .then((res)=>{
    console.log(res.data)
    setcomplaints(res.data)})
  .catch((err)=>console.log(err))
},[])



  return (
    <>
      {/* Pass function to Header */}
      <Header
        role="student"
        onRaiseComplaint={() => setShowComplaintForm(true)}
      />

      <div className="p-4"><ViewComplaints complaints={complaints}/></div>

      {/* Modal for Raise Complaint */}
      {showComplaintForm && (
        <div className="fixed inset-0 flex items-start justify-center  bg-opacity-40 z-50">
          <div className="relative rounded-lg ">
            {/* Close Button */}
            <FaXmark
              className="absolute top-3 right-3 cursor-pointer hover:bold"
              onClick={() => setShowComplaintForm(false)}
            /> 
            {/* Your Form Component */}
            <RaiseComplaint />
    </div>
  </div>
)}
    </>
  );
};

export default StudentDashboard;