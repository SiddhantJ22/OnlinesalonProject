import { useState } from "react";
import AppointmentService from "../../Services/Appointments/AppointmentService";

const AddAppointments = () => {

    const [appt,setAppt] = useState(
        {
            
                "appointmentId": "",
                "location": "",
                "visitType": "",
                "preferredDate": "",
                "preferredTime": "",
                "serviceName": ""
              
        }
    );

    // const [isEdit, setIsEdit] = useState(false);
    const [msg, setMsg] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState(undefined);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAppt((preAppt) => ({ ...preAppt, [name]: value }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(appt);
        AppointmentService.addAppointment(appt)
            .then((response) => {
                console.log(response.data)
                setMsg("Appointment Added Successfully !");
                setErrorMsg(undefined);
            })
            .catch((error) => {
                console.log(error)
                setErrorMsg("Failed to Add Appointment !");
                setMsg(undefined);
            })
    }
    return (
        <>
        <div className="addAppointment">
            <h3> Create new Appointment:</h3>
            {msg && <h5 className="alert alert-success">{msg}</h5>}
            {errorMsg && <h5 className="alert alert-danger">{errorMsg}</h5>}
            <form onSubmit={handleSubmit}>
                Appointment Id:
                <input type="text" name="appointmentId" value={appt.appointmentId} onChange={handleChange} /><br />
                 Location:
                <input type="text" name="location" value={appt.location} onChange={handleChange} /><br />
                 Preffered Date:
                <input type="text" name="preferredDate" value={appt.preferredDate} onChange={handleChange} /><br />
                 Preffered Time:
                <input type="text" name="preferredTime" value={appt.preferredTime} onChange={handleChange} /><br />
                 Service Name:
                <input type="text" name="serviceName" value={appt.serviceName} onChange={handleChange} /><br />
                <input type="submit" />
            </form>
            </div>
        </>
    );
};
export default AddAppointments;