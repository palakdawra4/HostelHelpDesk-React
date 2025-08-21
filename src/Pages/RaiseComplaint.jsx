
import { useState } from "react"

const RaiseComplaint=({ onAddComplaint })=>{

const [complainttype,setcomplainttype]=useState('Plumbing')
const [timeslot, settimeslot] = useState("");
const [description, setDescription] = useState("");


//  const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddComplaint(formData);
//     setFormData({
//       type: "",
//       madeOn: new Date().toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       }),
//       closedOn: "",
//       worker: "",
//       timeslot: "",
//       status: "Pending",
//     });
//   };


    return (
    <div className=" ">
  <form className="bg-gray-300 rounded-xl p-6 space-y-5 border border-gray-700 ">
    <h2 className="text-2xl font-semibold text-center text-gray-800">Raise Complaint</h2>

    {/* Complaint Type */}
    <div>
      <label htmlFor="complaintType" className="text-gray-700 font-medium mb-2">
        Complaint Type
      </label>
      <select
        id="complaintType"
        name="complaintType"
        value={complainttype}
        onChange={(e) => setcomplainttype(e.target.value)}
        className="w-full border border-black-300 rounded-lg p-2 "
      >
        <option value="Plumbing">Plumbing</option>
        <option value="Carpenter">Carpenter</option>
        <option value="Electrician">Electrician</option>
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
          type="text"
          id="timeslot"
          name="timeslot"
          placeholder="e.g 10:00am - 12:00am"
          value={timeslot}
          onChange={(e) => settimeslot(e.target.value)}
          className="w-full border border-black-300 rounded-lg p-2 "
         >
        <option >10:00-12:00</option>
        <option>1:00-2:00</option>
        </select>

        
      </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2 rounded-lg font-medium "
    >
      Submit
    </button>
  </form>
  </div>

)

}


export default RaiseComplaint