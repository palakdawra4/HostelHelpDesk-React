
const ViewComplaints = ({ complaints = [] ,usertype=""}) => {
  
  return (

    <div className="">
      <table className="w-full border border-gray-300 bg-white ">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Complaint ID</th>
            <th className="border px-4 py-2">Complaint Type</th>
            <th className="border px-4 py-2">Made on</th>
            <th className="border px-4 py-2">Closed on</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Worker</th>
            <th className="border px-4 py-2">Timeslot</th>
            <th className="border px-4 py-2">Status</th>
            {
              usertype === "Caretaker" &&(<>
                <th className="border px-4 py-2">StudentName</th>
                <th className="border px-4 py-2">Roomno</th>
                </>
              )
            }
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.complaintNo} className="text-center">
              <td className="border px-4 py-2">{c.complaintNo}</td>
              <td className="border px-4 py-2">{c.type}</td>
              <td className="border px-4 py-2">{c.created}</td>
              <td className="border px-4 py-2">{c.closed|| "-"}</td>
              <td className="border px-4 py-2">{c.description}</td>
              <td className="border px-4 py-2">{c.workerName || "-"}</td>
              <td className="border px-4 py-2">{c.timeslot}</td>
              <td className="border px-4 py-2">{c.status}</td>
              {
              usertype === "Caretaker"&&(<>
                <td className="border px-4 py-2">{c.studentName}</td>
                <td className="border px-4 py-2">{c.roomNo}</td>
                </>
              )
            }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewComplaints;
