import { useEffect, useState} from "react";
import AppointmentService from "../../Services/Appointments/AppointmentService";

function DisplayAllAppointments() {

    const [appointments, setAppointments] = useState(
        [
            {
                "appointmentId": "",
                "location": "",
                "visitType": "",
                "preferredDate": "",
                "preferredTime": "",
                "serviceName": ""
            }
        ]);

    const [updateAppointment, setUpdateAppointment] = useState(
        {
            "appointmentId": "",
            "location": "",
            "visitType": "",
            "preferredDate": "",
            "preferredTime": "",
            "serviceName": ""
        }
    );

    const [isUpdate, setIsUpdate] = useState(false);
    const [msg, setMsg] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState(undefined);

    const loadAllAppointments = () => {
        AppointmentService.getAllAppointments()
            .then((response) => {
              setAppointments(response.data);
                console.log(response.data);
                setErrorMsg(undefined);

            })
            .catch((error) => {
                console.log(error);
                setErrorMsg("Fail to Load Appointment");
            }
            )

    };

    useEffect(() => {
        loadAllAppointments();
    }, []);

    const deleteHandler = (appointmentId) => {
        console.log(" delete Appointment"+appointmentId);
        AppointmentService.deleteAppointment(appointmentId)
            .then((response) => {
                console.log("deleted:")
                console.log(response.data);
                setMsg("Appointment got Deleted successfully !");
                setErrorMsg(undefined);
                loadAllAppointments();
            })
            .catch((error) => {
                console.log(error);
                setErrorMsg("Fail to Delete Appointment!");
                setMsg(undefined);
            })
    }

    const updateHandler = (appointment) => {
        // console.log("updating" + JSON.stringify(order));
        setUpdateAppointment(appointment);
        setIsUpdate(true);
    };

    const changeHandle = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setUpdateAppointment(prevData => ({ ...prevData, [name]: value }));
        //console.log(value);
    };

    const submitHandle = (e) => {
        e.preventDefault();
        console.log(updateAppointment);
        AppointmentService.updateAppointment(updateAppointment)
            .then((response) => {
                console.log(response.data);
                setMsg("Appointment got Updated successfully !");
                setErrorMsg(undefined);
                setIsUpdate(false);
                loadAllAppointments();

            })
            .catch((error) => {
                console.log(error.response);
                setErrorMsg("Failed to Update Appointment!");
                setMsg(undefined);
                setIsUpdate(false);
            })
    };

    const updateAppointments = (
        <>
            <div className="updateAppointment">
                <h3>Update Appointment:</h3>
                <form onSubmit={submitHandle}>
                    <label>Appointment ID:</label>
                    <input type="text" name="appointmentID" value={appointments.appointmentId} onChange={changeHandle}></input><br />
                    <label>Location:</label>
                    <input type="text" name="location" value={appointments.location} onChange={changeHandle}></input><br />
                    <label>Preferred Date</label>
                    <input type="text" name="prefferedDate" value={appointments.preferredDate} onChange={changeHandle}></input><br />
                    <label>Preferred Time</label>
                    <input type="text" name="prefferedTime" value={appointments.preferredTime} onChange={changeHandle}></input><br />
                    <label>Service Name </label>
                    <input type="text" name="serviceName" value={appointments.serviceName} onChange={changeHandle}></input><br />
                    <input type="submit" />
                </form>
            </div>
        </>
    );

    const AppointmentTableElement = (
        <>
            <div className="displayAppointmentss" >
                <h3>Display All Appointments:</h3>
                {msg && <h5 className="alert alert-success">{msg}</h5>}
                {errorMsg && <h5 className="alert alert-danger">{errorMsg}</h5>}
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Location</th>
                            <th>preferredDate</th>
                            <th>prefferedTime</th>
                            <th>Service Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment) => (
                                <tr key={appointment.appointmentId}>
                                    <td>{appointment.appointmentId}</td>
                                    <td>{appointment.location}</td>
                                    <td>{appointment.preferredDate}</td>
                                    <td>{appointment.preferredTime}</td>
                                    <td>{appointment.serviceName}</td>
                                    <td>
                                        <input className="btn btn-info" id="update" type="button" value="Update Appointment" onClick={() => updateHandler(appointment)}></input>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <input className="btn btn-danger" id="delete" type="button" value="Delete Appointment" onClick={() => deleteHandler(appointment.appointmentId)}></input>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
    return isUpdate ? updateAppointments : AppointmentTableElement
}
export default DisplayAllAppointments;