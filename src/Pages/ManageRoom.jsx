import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { RoomData ,AddRoom, DeleteRoom} from "../API/ManageRoomAPI";
import { useParams } from "react-router-dom";

const ManageRoom = () => {
  const [rooms, setrooms] = useState([]);
  const{id}=useParams();

  const [showInputRow, setShowInputRow] = useState(false);
  const [newRoomNo, setNewRoomNo] = useState("");
  const[newCapacity,setcapacity]=useState("");

useEffect(()=>{
  RoomData(id)
  .then(res=>{
    setrooms(res.data)
  })
.catch((err)=>console.log(err))
},[])


  const handleAdd = () => {
    setShowInputRow(true);
  };

  const handleSave = () => {
    AddRoom(id,newRoomNo)
    setcapacity(0);
    if (newRoomNo.trim()) {
      const newRoom = {
        id: Date.now(),
        roomNo: newRoomNo,
        capacity:newCapacity, // no room info from API
      };
      setrooms([...rooms, newRoom]);
      setShowInputRow(false);
      setNewRoomNo("");

      
    }
  };

  const handleCancel = () => {
    setShowInputRow(false);
    setNewRoomNo("");
  };

  const handleDelete = (idToDelete) => {
    DeleteRoom(idToDelete);
    setrooms(rooms.filter((r) => r.id !== idToDelete));
  };

  return (
    <div className="p-1.5 border-2 w-100%">
      <div className="flex justify-between items-center mb-4 border-2">
        <h2 className="text-xl font-bold">Manage Rooms</h2>
        <button
          onClick={handleAdd}
          className="bg-gray-500 text-black px-4 py-2 rounded"
        >
          Add Rooms
        </button>
      </div>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            <th className="border p-2">Room No.</th>
            <th className="border p-2">Capacity</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td className="border p-2">{room.roomNo}</td>
              <td className="border p-2">{room.capacity}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => handleDelete(room.id)}
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
                  placeholder="Enter room no"
                  value={newRoomNo}
                  onChange={(e) => setNewRoomNo(e.target.value)}
                  className="w-full border px-2 py-1"
                />
              </td>

              <td className="border p-2 text-center text-gray-500 font-bold">0 </td>

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

export default ManageRoom;
