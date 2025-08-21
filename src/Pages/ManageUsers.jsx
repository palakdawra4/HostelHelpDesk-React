import { useState ,useEffect} from "react";
import { FaTrash } from "react-icons/fa";
import { GetStudent } from "../API/ManageUserApi";


const ManageUser = () => {
  const [userType, setUserType] = useState("Worker");
  const [showAlert, setShowAlert] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");

  const [rollNo, setRollNo] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [hostelId, setHostelId] = useState(1);
  const [specialization, setSpecialization] = useState("");

  const [formData, setFormData] = useState({});
  // const [studentData,setstudentData]=useState([])


  const hostels = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];

  // const studentData = [
  //   {
  //     id: 1,
  //     firstname: "Alice",
  //     lastname: "Sharma",
  //     phone: "9876543210",
  //     email: "alice@example.com",
  //     rollNo: "S123",
  //     hostelId: 1,
  //     roomNo: "101",
  //     userType: "Student",
  //   },
  //   {
  //     id: 2,
  //     firstname: "Bob",
  //     lastname: "kumar",
  //     phone: "9876501234",
  //     email: "bob@example.com",
  //     rollNo: "S456",
  //     hostelId: 2,
  //     roomNo: "202",
  //     userType: "Student",
  //   },
  // ];

  // const workerData = [
  //   {
  //     id: 3,
  //     firstname: "Ramesh",
  //     lastname: "verma",
  //     phone: "9988776655",
  //     email: "ramesh@example.com",
  //     specialization: "Electrician",
  //     userType: "Worker",
  //   },
  //   {
  //     id: 4,
  //     firstname: "Suresh",
  //     lastname: "Yadav",
  //     phone: "8877665544",
  //     email: "suresh@example.com",
  //     specialization: "Plumber",
  //     userType: "Worker",
  //   },
  // ];

  // const caretakerData = [
  //   {
  //     id: 5,
  //     firstname: "Priya",
  //     lastname: "Singh",
  //     phone: "9090909090",
  //     email: "priya@example.com",
  //     hostelId: 1,
  //     userType: "Caretaker",
  //   },
  //   {
  //     id: 6,
  //     firstname: "Anil",
  //     lastname: "Rao",
  //     phone: "9191919191",
  //     email: "anil@example.com",
  //     hostelId: 2,
  //     userType: "Caretaker",
  //   },
  // ];

  const [users, setUsers] = useState([
    // ...studentData,
    // ...workerData,
    // ...caretakerData,
  ]);

  const getHostelNameById = (id) =>
    hostels.find((h) => h.id === id)?.name || "-";

  const handleDelete = (id) => {
    const updateuser = users.filter((user) => user.id !== id);
    setUsers(updateuser);
  };

  const handleSave = () => {
    if (firstname && lastname && email && phoneno && password) {
      const newUser = {
        id: Date.now(),
        firstname,
        lastname,
        email,
        phone: phoneno,
        password,
        userType,
      };

      if (userType === "Student") {
        Object.assign(newUser, { rollNo, roomNo, hostelId });
      } else if (userType === "Caretaker") {
        Object.assign(newUser, { hostelId });
      } else if (userType === "Worker") {
        Object.assign(newUser, { specialization });
      }

      setUsers([...users, newUser]);
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
      setSpecialization("");
    }

  };
  const handleCancel=()=>{
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPhoneno("");
    setRollNo("");
    setRoomNo("");
    setHostelId(1);
    setSpecialization("");
    setShowAlert(false);
  }
  
  const SelectUserFromApi=(usertype)=>{
      setUserType(usertype)
      GetStudent()
      .then(res=>{setUsers(res.data),
        console.log(res.data),
        console.log(users)
      })
      .catch((err)=>console.log(err));
  }

   useEffect(() => {
    if (userType === "Student"){
      GetStudent()
      .then(res=>{setUsers(res.data)})
      .catch((err)=>console.log(err));
    }
    // else if (userType === "Worker") setUsers(workerData);
    // else if (userType === "Caretaker") setUsers(caretakerData);
  }, [userType]);



  return (
    <div className="p-1.5 border-2 w-100%">
      <div className="flex items-center justify-between mb-4 border-2">
        <h2 className="font-bold text-xl"> Manage User</h2>
        <button
          onClick={() => setShowAlert(true)}
          className="bg-gray-500 text-black px-4 py-2 rounded"
        >
          Add User
        </button>
      </div>

      <div>
        <label htmlFor="user">Select User Type</label>
        <select
          id="user"
          name="user"
          value={userType}
          // onChange={(e) => setUserType(e.target.value)}
          onChange={(e)=>SelectUserFromApi(e.target.value)}
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
            .filter((users) => users.userType === userType)
            .map((users) => (
              <tr key={users.email}>
                <td className="border px-4 py-2 text-center">
                  {users.firstName} {users.lastName}
                </td>
                <td className="border px-4 py-2 text-center">{users.phone}</td>
                <td className="border px-4 py-2 text-center">{users.email}</td>

                {userType === "Student" && (
                  <>
                    <td className="border px-4 py-2 text-center">
                      {users.rollNo}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {getHostelNameById(users.hostelId)}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {users.roomNo}
                    </td>
                  </>
                )}

                {userType === "Worker" && (
                  <td className="border px-4 py-2 text-center">
                    {users.specialization}
                  </td>
                )}

                {userType === "Caretaker" && (
                  <td className="border px-4 py-2 text-center">
                    {getHostelNameById(users.hostelId)}
                  </td>
                )}
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(users.id)}
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
                <input
                  type="text"
                  value={roomNo}
                  onChange={(e) => setRoomNo(e.target.value)}
                  className="w-full border px-3 py-2 mb-3 rounded"
                  placeholder="Room No"
                />
                <select
                  value={hostelId}
                  onChange={(e) => setHostelId(Number(e.target.value))}
                  className="w-full border px-3 py-2 mb-3 rounded"
                >
                  {hostels.map((h) => (
                    <option key={h.id} value={h.id}>
                      {h.name}
                    </option>
                  ))}
                </select>
              </>
            )}

            {userType === "Caretaker" && (
              <select
                value={hostelId}
                onChange={(e) => setHostelId(Number(e.target.value))}
                className="w-full border px-3 py-2 mb-3 rounded"
              >
                {hostels.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                ))}
              </select>
            )}

            {userType === "Worker" && (
              <input
                type="text"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full border px-3 py-2 mb-3 rounded"
                placeholder="Specialization"
              />
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
