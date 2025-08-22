import Header from "../components/Header"


const complaints=[
    {
      id: "COM-2386",
      type: "Plumbing",
      madeOn: "12-Aug-2025",
      closedOn: "12-Aug-2025",
      description:"leakage",
      worker: "Ram Babu",
      timeslot: "10:00 AM - 12:00 PM",
      roomNo:"101",
        hostelName:"Agira Hall",
      status: "Completed",
    },
  ];

const Worker=()=>{
    return(
        <>
        <Header role={Worker}/>
       
<div className="p-1.5">
<table className="w-full border border-gray-300 bg-white  ">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Complaint ID</th>
            <th className="border px-4 py-2">Complaint Type</th>
            <th className="border px-4 py-2">Made on</th>
            <th className="border px-4 py-2">Closed on</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Worker</th>
            <th className="border px-4 py-2">Timeslot</th>
            <th className="border px-4 py-2">Roomno</th>
            <th className="border px-4 py-2">Hostelname</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{c.id}</td>
              <td className="border px-4 py-2">{c.type}</td>
              <td className="border px-4 py-2">{c.madeOn}</td>
              <td className="border px-4 py-2">{c.closedOn || "-"}</td>
              <td className="border px-4 py-2">{c.description}</td>
              <td className="border px-4 py-2">{c.worker || "-"}</td>
              <td className="border px-4 py-2">{c.timeslot}</td>
              <td className="border px-4 py-2">{c.roomNo}</td>
              <td className="border px-4 py-2">{c.hostelName}</td>
              <td className="border px-4 py-2">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </>

    )

}
export default Worker;