package com.example.onlinesalon.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.onlinesalon.model.Appointment;

public interface IAppointmentRepository extends MongoRepository<Appointment,String>{

}
