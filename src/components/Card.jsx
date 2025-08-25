
import { useState, useEffect } from "react";
import axios from "axios";
const Card = ({ title, count }) => {

  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://m57hc7wc-5000.inc1.devtunnels.ms/api/Hostel/all', { headers: { Authorization: `bearer ${token}` } }).then((res) => { setHostels(res.data) }).catch((err) => { console.log(err) })
  }, []);



  return (
    <>
      <div className="w-100% h-34  flex items-center justify-between gap-1rem bg-blue-300 ">
        <div className="bg-gray-200 rounded-xl  h-30 w-80 m-1.5 bg-green-200  ">
          <h3 className="text-xl font-bold text-center mt-5">Hostels</h3>
          <p className="font-bold mt-2 text-center text-xl">{hostels.length}</p>
        </div>

        <div className="bg-gray-200 rounded-xl h-30 w-80 m-1.5 bg-pink-200 text-xl">
          <h3 className=" font-bold text-center mt-5">Total Students</h3>
          <p className="font-bold mt-2 text-center ">{count}</p>
        </div>

        <div className="bg-gray-200 rounded-xl  h-30 w-80 m-1.5 bg-yellow-200 text-xl">
          <h3 className=" font-bold text-center mt-5">Complaint Reported</h3>
          <p className="font-bold mt-2 text-center">{count}</p>
        </div>
      </div>
    </>
  )
}

export default Card