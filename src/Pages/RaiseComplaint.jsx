
import { useEffect, useState } from "react"
import { GetTimeslot } from "../API/ManageTimeslotAPI";
import { AddComplaint, GetComplaitType } from "../API/ComplaintsAPI";

const RaiseComplaint=({ onAddComplaint })=>{

const [complainttype,setcomplainttype]=useState([])
const [timeslot, settimeslot] = useState([]);
const [description, setDescription] = useState("");
const [timeslotId,setTimeslotId]=useState("")
const [complaintid,setcomplaintid]=useState('')
const[toggle,settoggle]=useState(false)


 const handleSubmit = (e) => {
    e.preventDefault();
    // onAddComplaint(formData);
    AddComplaint(complaintid,timeslotId,description)
    setcomplaintid('')
    setTimeslotId('')
    setDescription('')
    settoggle(true)
  };



useEffect(()=>{

GetComplaitType()
.then((res)=>{setcomplainttype(res.data)})
  .catch((err)=>console.log(err))

  
  GetTimeslot()
  .then((res)=>{settimeslot(res.data)})
  .catch((err)=>console.log(err))
},[])

    return (
    <div className=" ">
  <form className="bg-gray-300 rounded-xl p-6 space-y-5 border border-gray-700 "onSubmit={handleSubmit}>
    <h2 className="text-2xl font-semibold text-center text-gray-800">Raise Complaint</h2>

    {/* Complaint Type */}
    <div>
      <label htmlFor="complaintType" className="text-gray-700 font-medium mb-2">
        Complaint Type
      </label>
      <select
      value={complaintid}
      onChange={(e)=>setcomplaintid(e.target.value)}
      className="w-full border border-black-300 rounded-lg p-2 ">
      <option value=''>Select Complaint Type</option>
      {complainttype.map((c)=>(
          <option key={c.id} value={c.id}>{c.name}</option>
      ))}
       
      </select>
    </div>

    {/* Description */}
    <div>
      <label htmlFor="description" className=" text-gray-700 font-medium mb-2">
        Description
      </label>
       <textarea
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your description here..."
            className="w-full border border-black-300 rounded-lg p-2 "
          ></textarea>
    </div>

        {/* Timeslot */}
    <div>
        <label htmlFor="timeslot" className="block text-gray-700 font-medium mb-2">
          Timeslot
        </label>
        <select
        value={timeslotId}
        onChange={(e)=>setTimeslotId(e.target.value)}
       className="w-full border border-black-300 rounded-lg p-2 " >
          <option value=''>Select TimeSlot</option>
          {timeslot.map((t)=>(
            <option key={t.id} value={t.id}>{t.timeslots}</option>
          ))}
        </select>

        
      </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2 rounded-lg font-medium "
    >
      Submit
    </button>
    {toggle &&(
        <h2>Complaint Raised</h2>
    )}
  </form>
  </div>

)
}



export default RaiseComplaint