import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { AddTimeslot, DeleteTimeslot, GetTimeslot } from "../API/ManageTimeslotAPI";

const ManageTimeslot=()=>{

  const [timeslots, setTimeslots] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSave = () => {
  if (startTime && endTime) {
    AddTimeslot(startTime, endTime)
      .then(() => {
        return GetTimeslot();
      })
      .then((res) => {
        setTimeslots(res.data);
      })
      .catch((err) => console.log(err));

    setStartTime("");
    setEndTime("");
    setShowAlert(false);
  }
};

  const handleCancel=()=>{
    setStartTime("");
    setEndTime("");
    setShowAlert(false);
  }

   const handleDelete = (id) => {
  DeleteTimeslot(id)
    .then(() => {
      return GetTimeslot();
    })
    .then((res) => {
      setTimeslots(res.data);
    })
    .catch((err) => console.log(err));
};

  useEffect(()=>{
    GetTimeslot()
    .then(res=>{setTimeslots(res.data)})
    .catch((err)=>{
      console.log(err)
})
  },[])

    return(
        <div className="p-1.5 border-2 w-100%">
            <div className="flex justify-between items-center mb-4 border-2">
                 <h2 className="text-xl font-bold">Manage Timeslot</h2>
                  <button
                        onClick={()=>setShowAlert(true)}
                        className="bg-gray-500 text-black px-4 py-2 rounded">
                        Add timeslot
                    </button>

            </div>

            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-300">
                         <th className="border p-2">TimeSlots</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {timeslots.map((timeslots) => (
                        <tr key={timeslots.id}>
                            <td className="border p-2 text-center">{timeslots.timeslots}</td>
                            <td className="border p-2 text-center">
                                <button
                                onClick={() => handleDelete(timeslots.id)}
                                className="text-red-500 hover:text-red-700"
                                >
                                <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showAlert && (
        <div className="fixed inset-0 flex items-start  justify-center bg-opacity-40 z-50 min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 border-2">
            <h3 className="text-lg font-semibold mb-4">Add New Timeslot</h3>

            <input
              type="text"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 mb-3 rounded"
              placeholder="Start Time"
            />

            <input
              type="text"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 mb-4 rounded"
              placeholder="End Time"
            />
             <div className="flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="bg-gray-400 text-black px-4 py-2 rounded" >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="bg-green-500 text-black px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
    )
}

export default ManageTimeslot