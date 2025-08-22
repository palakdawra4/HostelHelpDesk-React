
import './App.css'
import AdminDashboard from './Pages/AdminDashboard'
import ManageHostel from './Pages/ManageHostel'
import ManageTimeslot from './Pages/ManageTimeslot'
import ManageUser from './Pages/ManageUsers'
import ManageRoom from './Pages/ManageRoom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import StudentDashboard from './Pages/StudentDashboard'
import Login from './Pages/LoginPage'
import Caretaker from './Pages/Caretaker'
import Worker from './Pages/Worker'

function App() {
return (
<Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Login />} />
        
        <Route path="/admin" element={<Layout/>} >
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path ="manage-hostel" element={<ManageHostel/>}/>
       <Route path="manage-users" element={<ManageUser />} />
        <Route path="manage-room/:id" element={<ManageRoom />} />
       <Route path="manage-timeslot" element={<ManageTimeslot />} />
       </Route>
        {/* Role based dashboards */}
        <Route path="/caretaker" element={<Caretaker/>} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/worker" element={<Worker />} />
      </Routes>
    </Router>

  )


}









export default App
