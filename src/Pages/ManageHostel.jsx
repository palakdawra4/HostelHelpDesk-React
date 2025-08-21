import { useState,useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { ManageData,DeleteData,AddData } from "../API/ManageHostelApi";
import { NavLink } from "react-router-dom";




const ManageHostel = () => {
  const [hostels, setHostels] = useState([]);

useEffect(()=>{
  ManageData()
  .then(res =>{
  setHostels(res.data)
})
.catch((err) => console.error(err));
},[])



  const [showInputRow, setShowInputRow] = useState(false);
  const [newHostelName, setNewHostelName] = useState("");

  const handleAdd = () => {
    setShowInputRow(true);
  };

  const handleSave = () => {
    if (newHostelName.trim()) {
      AddData(newHostelName)
      const newHostel = {
        id: Date.now(),
        hostelName: newHostelName,
        roomNo: "", // no room info from API
      };
    
      setHostels([...hostels, newHostel]);
      setShowInputRow(false);
      setNewHostelName("");
    }
  };

  const handleCancel = () => {
    setShowInputRow(false);
    setNewHostelName("");
  };

  const handleDelete = async(id) => {
    await DeleteData(id);
    setHostels(hostels.filter((h) => h.id !== id));
   
  };

  return (
    <div className="p-1.5 border-2 w-100%">
      <div className="flex justify-between items-center mb-4 border-2">
        <h2 className="text-xl font-bold">Manage Hostels</h2>
        <button
          onClick={handleAdd}
          className="bg-gray-500 text-black px-4 py-2 rounded"
        >
          Add Hostel
        </button>
      </div>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            <th className="border p-2">Hostel Name</th>
            <th className="border p-2">Rooms Available</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {hostels.map((hostel) => (
            <tr key={hostel.id}>
              <td className="border p-2">
                  <NavLink 
                to={`/admin/manage-room/${hostel.id}`}>
                  {hostel.hostelName}
                </NavLink>
              </td>
              <td className="border p-2">
                {hostel.roomNo}
              </td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => handleDelete(hostel.id)}
                  className="text-red-500 hover:text-red-700"
                >
                <FaTrash />
                </button>
              </td>
            </tr>
          ))}

          {showInputRow && (
            <tr>
              <td className="border p-2">
                <input
                  type="text"
                  placeholder="Enter hostel name"
                  value={newHostelName}
                  onChange={(e) => setNewHostelName(e.target.value)}
                  className="w-full border px-2 py-1"
                />
              </td>

              <td className="border p-2 text-center text-gray-500 font-bold">0</td>

              <td className="border p-2 flex gap-2 justify-center">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-black px-2 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-400 text-black px-2 py-1 rounded"
                >
                  Cancel
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageHostel;
