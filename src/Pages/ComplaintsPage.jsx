import { useState } from "react";
import RaiseComplaint from "./RaiseComplaint";
import ViewComplaints from "./ViewComplaints";

const ComplaintsPage = () => {
  const [complaints, setComplaints] = useState([
    {
      id: "COM-2386",
      type: "Plumbing",
      madeOn: "12-Aug-2025",
      closedOn: "12-Aug-2025",
      worker: "Ram Babu",
      timeslot: "10:00 AM - 12:00 PM",
      status: "Completed",
    },
  ]);

  const addComplaint = (newComplaint) => {
    setComplaints((prev) => [
      ...prev,
      { id: `COM-${Math.floor(Math.random() * 9000) + 1000}`, ...newComplaint },
    ]);
  };

  return (
    <div>
      <RaiseComplaint onAddComplaint={addComplaint} />
      <ViewComplaints complaints={complaints} />
    </div>
  );
};

export default ComplaintsPage;
