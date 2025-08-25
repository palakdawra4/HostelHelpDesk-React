import Card from '../components/Card'
import HostelTable from '../components/HostelTable'
import { HostelData } from '../API/AdminDashboardAPI';
import { useEffect ,useState} from 'react';



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
