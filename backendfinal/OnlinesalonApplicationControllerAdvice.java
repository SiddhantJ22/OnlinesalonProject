package com.example.onlinesalon.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.http.HttpStatus;
import com.example.onlinesalon.exceptions.AppointmentException;
import com.example.onlinesalon.exceptions.CustomerException;
import com.example.onlinesalon.exceptions.SalonException;

@RestControllerAdvice
public class OnlinesalonApplicationControllerAdvice {
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
    @ExceptionHandler(AppointmentException.class)
    public String appointmentExceptionHandler(Exception e) {
        return e.getMessage();
    }
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
    @ExceptionHandler(SalonException.class)
    public String salonExceptionHandler(Exception e) {
        return e.getMessage();
    }
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
    @ExceptionHandler(CustomerException.class)
    public String customerExceptionHandler(Exception e) {
        return e.getMessage();
    }
}
