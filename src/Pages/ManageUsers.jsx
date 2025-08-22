import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { GetCaretaker, GetStudent, GetWorker, AddStudent, AddCaretaker, AddWorker, GetWorkerTypes, DeleteUser } from "../API/ManageUserApi";
import { ManageData } from "../API/ManageHostelApi";
import { RoomData } from "../API/ManageRoomAPI";

const ManageUser = () => {
  const [userType, setUserType] = useState("Worker");
  const [showAlert, setShowAlert] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [roomNo, setRoomNo] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [hostelId, setHostelId] = useState("");
  const [specialization, setSpecialization] = useState([]);
  const [specializationId, setSpecializationId] = useState([]);
  const [users, setUsers] = useState([]);
  const [hostels, setHostels] = useState([]);

  const handleDelete = async (id) => {
    await DeleteUser(id);
    if (userType === "Student") {
      await GetStudent()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else if (userType === "Worker") {
      await GetWorker()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else if (userType === "Caretaker") {
      await GetCaretaker()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else {
      setUsers([]);
    }
    // const updateuser = users.filter((user) => user.id !== id);
    // setUsers(updateuser);
  };

  const getHostelData = () => {
    ManageData()
      .then((res) => { setHostels(res.data) })
      .catch((err) => console.log(err))
  }

  const getWorkerSpecialization = () => {
    GetWorkerTypes()
      .then((res) => { setSpecialization(res.data) })
      .catch((err) => console.log(err))
  }

  const getRoomNoData = (id) => {
    RoomData(id)
      .then((res) => { setRoomNo(res.data) })
      .catch((err) => console.log(err))
  }

  const handleSave = async () => {
    if (firstname && lastname && email && phoneno && password) {
    

      if (userType === "Student") {
        await AddStudent(firstname, lastname, phoneno, email, password, rollNo, hostelId, roomId)
        await GetStudent()
          .then(res => { setUsers(res.data) })
          .catch((err) => console.log(err));
      } 
      else if (userType === "Caretaker") {
        await AddCaretaker(firstname, lastname, phoneno, email, password, hostelId)
        await GetCaretaker()
          .then(res => { setUsers(res.data) })
          .catch((err) => console.log(err));
      } 
      else if (userType === "Worker") {
        await AddWorker(firstname, lastname, phoneno, email, password, specializationId)
        await GetWorker()
          .then(res => { setUsers(res.data) })
          .catch((err) => console.log(err));
      }

      setShowAlert(false);

      // Reset form fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setPhoneno("");
      setRollNo("");
      setRoomNo("");
      setHostelId(1);
      setSpecialization([]);
      setSpecializationId([]);
      setRoomNo([]);
    }
  };

  const handleCancel = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPhoneno("");
    setRollNo("");
    setRoomNo([]);
    setHostels([]);
    setHostelId("");
    setSpecialization([]);
    setShowAlert(false);
  }

  const SelectUserFromApi = (usertype) => {
    setUserType(usertype)
    setUsers([]);
    if (usertype === "Student") {
      GetStudent()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else if (usertype === "Worker") {
      GetWorker()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else if (usertype === "Caretaker") {
      GetCaretaker()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else {
      setUsers([]);
    }
  }

  useEffect(() => {
    if (userType === "Student") {
      GetStudent()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else if (userType === "Worker") {
      GetWorker()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else if (userType === "Caretaker") {
      GetCaretaker()
        .then(res => { setUsers(res.data) })
        .catch((err) => console.log(err));
    }
    else {
      setUsers([]);
    }
  }, [userType]);

  const handleSpecializationChange = (id) => {
    const idNum = Number(id); // ensure it's numeric (if IDs are numbers)
    if (specializationId.includes(idNum)) {
      // Remove if already selected
      setSpecializationId(specializationId.filter((sid) => sid !== idNum));
    } else {
      // Add if not selected
      setSpecializationId([...specializationId, idNum]);
    }
  };


  return (
    <div className="p-1.5 border-2 w-100%">
      <div className="flex items-center justify-between mb-4 border-2">
        <h2 className="font-bold text-xl"> Manage User</h2>
        <button
          onClick={() => {
            console.log(userType)
            if (userType === "Worker")
              getWorkerSpecialization()
            else
              getHostelData();
            setShowAlert(true);
          }}
          className="bg-gray-500 text-black px-4 py-2 rounded"
        >
          Add {userType}
        </button>
      </div>

      <div>
        <label htmlFor="user">Select User Type</label>
        <select
          id="user"
          name="user"
          value={userType}
          // onChange={(e) => setUserType(e.target.value)}
          onChange={(e) => SelectUserFromApi(e.target.value)}
          className="border px-2 py-1 ml-5"
        >
          <option value="Student">Student</option>
          <option value="Caretaker">Caretaker</option>
          <option value="Worker">Worker</option>
        </select>
      </div>

      <table className="w-full border border-gray-300 mt-3">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Phone Number</th>
            <th className="border px-4 py-2">Email</th>

            {userType === "Student" && (
              <>
                <th className="border px-4 py-2">Roll No</th>
                <th className="border px-4 py-2">Hostel</th>
                <th className="border px-4 py-2">Room No</th>
              </>
            )}

            {userType === "Worker" && (
              <th className="border px-4 py-2">Specialization</th>
            )}

            {userType === "Caretaker" && (
              <th className="border px-4 py-2">Hostel</th>
            )}

            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users
            // .filter((user) => user.userType === userType)
            .map((user) => (
              <tr key={user.email}>
                <td className="border px-4 py-2 text-center">
                  {user.firstName} {user.lastName}
                </td>
                <td className="border px-4 py-2 text-center">{user.phoneNumber}</td>
                <td className="border px-4 py-2 text-center">{user.email}</td>

                {userType === "Student" && (
                  <>
                    <td className="border px-4 py-2 text-center">
                      {user.rollNo}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {user.hostelName}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {user.roomNo}
                    </td>
                  </>
                )}

                {userType === "Worker" && (
                  <td className="border px-4 py-2 text-center">
                    {user.workerSpecialization.join(", ")}
                  </td>
                )}

                {userType === "Caretaker" && (
                  <td className="border px-4 py-2 text-center">
                    {user.hostelName}
                  </td>
                )}
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {showAlert && (

        <div className="fixed inset-0 flex items-start justify-center bg-opacity-40 z-50 min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 border-2 ">
            <h3 className="text-lg font-semibold mb-4">Add {userType} Details</h3>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full border px-3 py-2 mb-3 rounded"
              placeholder="First name"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full border px-3 py-2 mb-3 rounded"
              placeholder="Last name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 mb-3 rounded"
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 mb-3 rounded"
              placeholder="Password"
            />
            <input
              type="text"
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
              className="w-full border px-3 py-2 mb-3 rounded"
              placeholder="Phone Number"
            />

            {userType === "Student" && (
              <>
                <input
                  type="text"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="w-full border px-3 py-2 mb-3 rounded"
                  placeholder="Roll No"
                />
                <select
                  value={hostelId}
                  onChange={(e) => {
                    const selectedId = Number(e.target.value);
                    setHostelId(selectedId);
                    if (userType === "Student") {
                      getRoomNoData(selectedId); // only call RoomData for students
                    }
                  }}
                  className="w-full border px-3 py-2 mb-3 rounded"
                >
                  <option value="">Select Hostel</option>
                  {hostels.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.hostelName}
                    </option>
                  ))}
                </select>

                <select
                  value={roomId}
                  onChange={(e) => {
                    setRoomId(e.target.value);
                  }}
                  className="w-full border px-3 py-2 mb-3 rounded"
                >
                  <option value="">Select Room</option>
                  {roomNo.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.roomNo}
                    </option>
                  ))}
                </select>

              </>
            )}

            {userType === "Caretaker" && (
              <select
                value={hostelId}
                onChange={(e) => {
                  const selectedId = Number(e.target.value);
                  setHostelId(selectedId);
                  if (userType === "Student") {
                    getRoomNoData(selectedId); // only call RoomData for students
                  }
                }}
                className="w-full border px-3 py-2 mb-3 rounded"
              >
                <option value="">Select Hostel</option>
                {hostels.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.hostelName}
                  </option>
                ))}
              </select>
            )}

            {/* {userType === "Worker" && (
              <select
                  value={specializationId}
                  onChange={(e) => {
                    setSpecializationId(e.target.value);
                  }}
                  className="w-full border px-3 py-2 mb-3 rounded"
                >
                  <option value="">Select Specialization</option>
                  {specialization.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
            )} */}

            {userType === "Worker" && (
              <div className="mb-3">
                <label className="block font-medium mb-1">Select Specializations</label>
                <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
                  {specialization.map((s) => (
                    <label key={s.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={s.id}
                        checked={specializationId.includes(s.id)}
                        onChange={(e) => handleSpecializationChange(e.target.value)}
                        className="form-checkbox"
                      />
                      <span>{s.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancel}
                className="bg-gray-400 text-black px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-black px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUser;
