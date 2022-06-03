import http from '../Appointments/http-common'

class AppointmentService{
    getAllAppointments(){
        return http.get("appointments");
    }
    addAppointment(appt){
        return http.post("appointment",appt);
    }
    deleteAppointment(apptId){
        console.log("inside service"+apptId);
        return http.delete("appointment/"+apptId);
    }
    updateAppointment(appt){
        return http.put("appointment",appt);
    }
}

export default new AppointmentService();