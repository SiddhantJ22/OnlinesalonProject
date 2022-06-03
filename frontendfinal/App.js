
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPage';
import DisplayAllAppointments from './Component/Appointments/DisplayAllAppointments';
import AddAppointments from './Component/Appointments/AddAppointments';
import UpdatedeleteAppointments from './Component/Appointments/UpdatedeleteAppointments'
function App() {
  return (
    <>
      <h1>Welcome to Online Salon Booking Application:</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="displayAppointments" element={<DisplayAllAppointments />} />
            <Route path="addAppointment" element={<AddAppointments />} />
            <Route path="updatedeleteAppointment" element={<UpdatedeleteAppointments />} />
            
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;