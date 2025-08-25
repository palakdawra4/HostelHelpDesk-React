import { Link,NavLink } from 'react-router-dom';

const Sidebar=()=>{
    return(
        <div className="w-100% bg-[#F2F2F2] h-screen  ">
            <div className="flex flex-col pt-3 pl-2 text-xl">
            <NavLink 
                to="/admin/manage-hostel"
                style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'black' : 'black'
                })}
                >
                Manage Hostel
                </NavLink>
            </div>
            <div className="flex flex-col  pt-3 pl-2 text-xl ">
               <NavLink 
                to="/admin/manage-users"
                style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'black' : 'black'
                })}
                >
                Manage Users
                </NavLink>
            </div>
            <div className="flex flex-col  pt-3 pl-2 text-xl ">
                <NavLink 
                to="/admin/manage-timeslot"
                style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'black' : 'black'
                })}
                >
                Manage Timeslot
                </NavLink>
            </div>
             {/* <div className="flex flex-col p-2  bg-blue-300 m-1 text-xl ">
                <NavLink 
                to="/admin/manage-room"
                style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    color: isActive ? 'black' : 'black'
                })}
                >
                Manage Room
                </NavLink>
             </div> */}
        </div>
    )
}
export default Sidebar;