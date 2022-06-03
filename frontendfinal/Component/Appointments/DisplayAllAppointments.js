import { useEffect, useState } from "react";
import AppointmentService from "../../Services/Appointments/AppointmentService";

function DisplayAllAppointments() {

    const [appointments, setAppointments] = useState([{
        "appointmentId": "",
        "location": "",
        "visitType": "",
        "preferredDate": "",
        "preferredTime": "",
        "serviceName": ""
      }]);

    useEffect(() => {
        loadAllAppointments();
    }, []);

    const loadAllAppointments = () => {
        AppointmentService.getAllAppointments()
            .then((response) => {
                console.log(response.data);

                setAppointments(response.data);
            })
            .catch((error) => { console.log(error) })
    };

    const appointmentsTableElement = (
        <>
            <h3>Display All Appointments:</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Appointment Id</th>
                        <th>Location</th>
                        <th>Preffered Date</th>
                        <th>Preffered Time</th>
                        <th>Service Name</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appt) => (
                            <tr key={appt.appointmentId}>
                                <td>{appt.appointmentId}</td>
                                <td>{appt.location}</td>
                                <td>{appt.preferredDate}</td>
                                <td>{appt.preferredTime}</td>
                                <td>{appt.serviceName}</td>
                                
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </>

    );
    return (
        <>
            {appointmentsTableElement}
        </>
    );
}
export default DisplayAllAppointments;