package com.example.onlinesalon.model;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
   @Document
public class Appointment {
	@Id
	String appointmentId;
	String location;
	String visitType;
	LocalDate preferredDate;
	String preferredTime;
	String serviceName;
	

	public Appointment() {
		super();
	}
	// TODO Auto-generated constructor stub}

	public Appointment(String appointmentId, String location, String visitType, LocalDate preferredDate,
			String preferredTime, String serviceName) {
		super();
		this.appointmentId = appointmentId;
		this.location = location;
		this.visitType = visitType;
		this.preferredDate = preferredDate;
		this.preferredTime = preferredTime;
		this.serviceName = serviceName;
		
	}

	public String getAppointmentId() {
		return appointmentId;
	}

	public void setAppointmentId(String appointmentId) {
		this.appointmentId = appointmentId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getVisitType() {
		return visitType;
	}

	public void setVisitType(String visitType) {
		this.visitType = visitType;
	}

	public LocalDate getPreferredDate() {
		return preferredDate;
	}

	public void setPreferredDate(LocalDate preferredDate) {
		this.preferredDate = preferredDate;
	}

	public String getPreferredTime() {
		return preferredTime;
	}

	public void setPreferredTime(String preferredTime) {
		this.preferredTime = preferredTime;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}
}
