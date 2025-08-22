const HostelTable = ({ data }) => (
  <table className="w-full text-center bg-blue-200 border-collapse border border-gray-400">
    <thead>
      <tr className="bg-blue-200">
        <th className="border px-4 py-2">Hostel Name</th>
        <th className="border px-4 py-2">Caretaker</th>
        <th className="border px-4 py-2">Students</th>
        <th className="border px-4 py-2">Complaints</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="border px-4 py-2">{item.hostelName}</td>
          <td className="border px-4 py-2">{item.caretaker}</td>
          <td className="border px-4 py-2">{item.students}</td>
          <td className="border px-4 py-2">{item.complaints}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default HostelTable;
