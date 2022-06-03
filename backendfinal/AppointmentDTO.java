package com.example.onlinesalon.model;

public class AppointmentDTO {
	String customerId;
	String appId;
	public AppointmentDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AppointmentDTO(String customerId, String appId) {
		super();
		this.customerId = customerId;
		this.appId = appId;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getAppId() {
		return appId;
	}
	public void setAppId(String appId) {
		this.appId = appId;
	}
	

}
