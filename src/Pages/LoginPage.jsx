import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginUser } from "../API/Login";
import { getUserFromToken } from "../API/Auth";

const Login = () => {
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const [role, setRole] = useState("");
  const navigate = useNavigate();
  const[error,setError]=useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // You can add authentication logic here
//     if (role === "admin") navigate("/admin");
//     else if (role === "caretaker") navigate("/caretaker");
//     else if (role === "student") navigate("/student");
//     else if (role === "worker") navigate("/worker");
//   };

const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await LoginUser(`${username}`,`${password}`);

      // Save token + user in localStorage
      localStorage.setItem("token", data.token);
        const user = getUserFromToken();
      // Redirect based on role
      if (user.role === "Admin") {
        navigate("/admin");
      } else if (user.role === "Student") {
        navigate("/student");
      } else if (user.role === "Caretaker") {
        navigate("/caretaker");
      } else if (user.role === "Worker") {
        navigate("/worker");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };



  return (
    <div className="flex items-center justify-center w-screen bg-gray-100 min-h-screen">
      <form className="bg-white shadow-lg rounded-2xl p-8 w-96 flex flex-col gap-5 " onSubmit={handleLogin}>
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Hostel Help Desk 
        </h2>

        {/* Username */}
        <div className="flex flex-col">
          <label htmlFor="username" className="text-sm font-medium text-gray-600 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter Password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* User Type */}
        <div className="flex flex-col">
          <label htmlFor="usertype" className="text-sm font-medium text-gray-600 mb-1">
            User Type
          </label>
          <select
            id="usertype"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={role} onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="caretaker">Caretaker</option>
            <option value="worker">Worker</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
