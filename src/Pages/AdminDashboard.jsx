import Card from '../components/Card'
import HostelTable from '../components/HostelTable'
import { HostelData } from '../API/AdminDashboardAPI';
import { useEffect ,useState} from 'react';


// const hostelData = [
//   { hostelName: "A", caretaker: "Sahil", students: 712, complaints: 123 },
//   { hostelName: "B", caretaker: "Shilpa", students: 345, complaints: 12 },
//   { hostelName: "C", caretaker: "Kajal", students: 678, complaints: 90 },
//   { hostelName: "D", caretaker: "Sameer", students: 234, complaints: 466 },
//   { hostelName: "E", caretaker: "Kapil", students: 867, complaints: 789 },
//   { hostelName: "F", caretaker: "Era", students: 567, complaints: 435 },
//   { hostelName: "G", caretaker: "Farhan", students: 678, complaints: 89 },
//   { hostelName: "H", caretaker: "Poonam", students: 789, complaints: 345 },
//   { hostelName: "I", caretaker: "Rizul", students: 265, complaints: 756 },
// ];
 
function AdminDashboard() {
  
        const [hostelData, setHostelData] = useState([]);

        useEffect(()=>{
        HostelData()
        .then(res=>{
        setHostelData(res.data)
        })
        .catch((err) => console.error(err));
        },[])


  return (
    <>
    <Card/>
    <HostelTable data={hostelData}/>
    </>
  )
}

export default AdminDashboard;
