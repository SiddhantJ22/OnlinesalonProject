package com.example.onlinesalon.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.onlinesalon.exceptions.AppointmentException;
import com.example.onlinesalon.exceptions.CustomerException;
import com.example.onlinesalon.model.Appointment;
import com.example.onlinesalon.model.AppointmentDTO;
import com.example.onlinesalon.model.Customer;
import com.example.onlinesalon.repo.CustomerRepo;
import com.example.onlinesalon.repo.IAppointmentRepository;
@Service
public class AppointmentServiceImpl implements IAppointmentService {
	@Autowired
	private IAppointmentRepository appointmentrepo;
@Autowired
private CustomerRepo customerrepo;
	@Override
	public Appointment addAppointment(Appointment appointment) throws AppointmentException {
		Optional<Appointment> newAppointment = this.appointmentrepo.findById(appointment.getAppointmentId());
		if (newAppointment.isPresent())
			throw new AppointmentException("Already appointment taken");
		return this.appointmentrepo.save(appointment);
	}

	@Override
	public Appointment updateAppointment(Appointment appointment) throws AppointmentException {
		return this.appointmentrepo.save(appointment);
	}

	@Override
	public String deleteAppointment(String Id) throws AppointmentException {
		this.appointmentrepo.deleteById(Id);
		return "Appointment deleted successfully";
	}

	@Override
	public Appointment getAppointmentbyId(String appointmentId) throws AppointmentException {
		Optional<Appointment> newAppointment = this.appointmentrepo.findById(appointmentId);
		if (newAppointment.isPresent())
			throw new AppointmentException("Already appointment taken");
		return newAppointment.get();
	}
	
	@Override
	public List<Appointment> getAllAppointments(){
		return appointmentrepo.findAll();
	}
	@Override
	public List<Appointment>getAllAppointmentsbyCustomerId(AppointmentDTO appDTO) throws AppointmentException, CustomerException{
		Optional<Appointment> newAppointment = this.appointmentrepo.findById(appDTO.getAppId());
		if (newAppointment.isPresent()==false)
			throw new AppointmentException("AppointmentId doesnt exist");
		Optional<Customer> newCustomer = this.customerrepo.findById(appDTO.getCustomerId());
		if (newCustomer.isPresent()==false)
			throw new CustomerException("CustomerId doesnt exist");
		Appointment appt=newAppointment.get();
		Customer cust=newCustomer.get();
		if (cust.getAppointments().contains(newAppointment))
			throw new AppointmentException("Already appointment added to customer");
            cust.getAppointments().add(appt);
            this.customerrepo.save(cust);
		return cust.getAppointments();
		
	}
	
}
