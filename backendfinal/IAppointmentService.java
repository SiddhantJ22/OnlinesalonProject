package com.example.onlinesalon.service;

import java.util.List;

import com.example.onlinesalon.exceptions.AppointmentException;
import com.example.onlinesalon.exceptions.CustomerException;
import com.example.onlinesalon.model.Appointment;
import com.example.onlinesalon.model.AppointmentDTO;

public interface IAppointmentService {

	Appointment addAppointment(Appointment appointment) throws AppointmentException;

	Appointment updateAppointment(Appointment appointment) throws AppointmentException;

	String deleteAppointment(String Id) throws AppointmentException;

	Appointment getAppointmentbyId(String appointmentId) throws AppointmentException;

	List<Appointment> getAllAppointments();

	List<Appointment> getAllAppointmentsbyCustomerId(AppointmentDTO appDTO) throws AppointmentException, CustomerException;

}
