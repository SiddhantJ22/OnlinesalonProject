package com.example.onlinesalon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.onlinesalon.exceptions.AppointmentException;
import com.example.onlinesalon.exceptions.CustomerException;
import com.example.onlinesalon.model.Appointment;
import com.example.onlinesalon.model.AppointmentDTO;
import com.example.onlinesalon.service.IAppointmentService;
@CrossOrigin(value="http://localhost:3000/")
@RestController
@RequestMapping("api")
public class AppointmentController {
		@Autowired
		private IAppointmentService apptService;
		
		@GetMapping("appointments")
		public List<Appointment> getAllAppointments(){
			return this.apptService.getAllAppointments();
		}
		
		@PostMapping("appointment")
		public Appointment addAppointment(@RequestBody Appointment appointment) throws AppointmentException {
			return this.apptService.addAppointment(appointment);
		}
		
		@DeleteMapping("appointment/{id}")
		public String cancelAppointment(@PathVariable("id")String appointmentId) throws AppointmentException {
			return this.apptService.deleteAppointment(appointmentId);
		}
		
		@PutMapping("appointment")
		public Appointment updateAppointment(@RequestBody Appointment appointment) throws AppointmentException {
			return this.apptService.updateAppointment(appointment);
		}
		
		@GetMapping("appointment/{id}")
		public Appointment showAppointmentById(@PathVariable("id") String appointmentId)throws AppointmentException {
			return this.apptService.getAppointmentbyId(appointmentId);
		}
		@GetMapping("appointmentDTO")
		public List <Appointment>getallappointmentsbycustomerId(AppointmentDTO apptDTO)throws AppointmentException,CustomerException{
		return this.apptService.getAllAppointmentsbyCustomerId(apptDTO);
		}
}
