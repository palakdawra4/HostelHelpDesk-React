import { useState } from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ({ role , onRaiseComplaint, onAssignedComplaints }) => {

  const settoken=()=>{
    localStorage.setItem("token"," ")
  }
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  // const normalizedRole = (role ?? "").toLowerCase().trim();

  return (
    <header className="bg-blue-300 p-3 w-screen flex items-center justify-between">
      {/* Logo / Title */}
      <div className="text-lg font-bold text-xl">Hostel Help Desk</div>

      {/* Navigation + Icons */}
      <div className="flex items-center space-x-4">
        {/* Role-based main navigation */}
        {console.log(role)}
        {role === "admin"||"worker"&&(
          <>
            <h2 className="text-xl font-bold cursor-pointer">About</h2>
            <h2 className="text-xl font-bold cursor-pointer">Contact Us</h2>
          </>
        )}

        {role === "student" && (
          <>
          <button
            onClick={onRaiseComplaint}
            className="bg-green-500 text-black px-4 py-1 rounded hover:bg-green-600 transition"
          >
            Raise Complaint
          </button>
            <h2 className="text-xl font-bold cursor-pointer">Contact Us</h2>
          </>
        )}

        {/* {role === "Caretaker" && (
           <>
            <h2 className="text-xl font-bold cursor-pointer">About</h2>
            <h2 className="text-xl font-bold cursor-pointer">Contact Us</h2>
          </>
        )} 
      */}
      
        {/* Icons */}
        <FaBell className="cursor-pointer" />
        <button className="relative" onClick={toggleMenu}>
          <FaUser className="cursor-pointer" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-3 top-16 w-40 bg-gray-100 shadow-md rounded-md border">
          {role === "admin" && (
            <div className="p-2 bg-gray-200 m-2 rounded hover:bg-gray-300 cursor-pointer">
              Manage Profiles
            </div>
          )}
          <div className="p-2 bg-gray-200 m-2 rounded hover:bg-gray-300 cursor-pointer">
          
            <NavLink 
            onClick={()=>settoken()}
                to="/"
                style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'black' : 'black'
                })}
              >
                Logout
                </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
