package com.lti.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "customer_registration")
@SequenceGenerator(name = "seq", sequenceName = "customer_sequence", allocationSize = 1, initialValue = 108897)

public class CustomerApplication {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
	private int customer_id;
	private String customer_name;
	private String gender;
	private String father_name;
	private long mobile_no;
	private String email_id;
	private long adhaar_no;
	private String pan_no;
	private String date_of_birth;
	private String address;
	private String state;
	private String city;
	private long pincode;
	private String occupation_type;
	private double annual_income;


	public CustomerApplication() {
		super();
	}


	public int getCustomer_id() {
		return customer_id;
	}


	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}


	public String getCustomer_name() {
		return customer_name;
	}


	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getFather_name() {
		return father_name;
	}


	public void setFather_name(String father_name) {
		this.father_name = father_name;
	}


	public long getMobile_no() {
		return mobile_no;
	}


	public void setMobile_no(long mobile_no) {
		this.mobile_no = mobile_no;
	}


	


	public String getEmail_id() {
		return email_id;
	}


	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}


	public long getAdhaar_no() {
		return adhaar_no;
	}


	public void setAdhaar_no(long adhaar_no) {
		this.adhaar_no = adhaar_no;
	}


	public String getPan_no() {
		return pan_no;
	}


	public void setPan_no(String pan_no) {
		this.pan_no = pan_no;
	}


	public String getDate_of_birth() {
		return date_of_birth;
	}


	public void setDate_of_birth(String date_of_birth) {
		this.date_of_birth = date_of_birth;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public long getPincode() {
		return pincode;
	}


	public void setPincode(long pincode) {
		this.pincode = pincode;
	}


	public String getOccupation_type() {
		return occupation_type;
	}


	public void setOccupation_type(String occupation_type) {
		this.occupation_type = occupation_type;
	}


	public double getAnnual_income() {
		return annual_income;
	}


	public void setAnnual_income(double annual_income) {
		this.annual_income = annual_income;
	}


	public CustomerApplication(int customer_id, String customer_name, String gender, String father_name, long mobile_no,
			String email, long adhaar_no, String pan_no, String date_of_birth, String address, String state,
			String city, long pincode, String occupation_type, double annual_income) {
		super();
		this.customer_id = customer_id;
		this.customer_name = customer_name;
		this.gender = gender;
		this.father_name = father_name;
		this.mobile_no = mobile_no;
		this.email_id = email;
		this.adhaar_no = adhaar_no;
		this.pan_no = pan_no;
		this.date_of_birth = date_of_birth;
		this.address = address;
		this.state = state;
		this.city = city;
		this.pincode = pincode;
		this.occupation_type = occupation_type;
		this.annual_income = annual_income;
	}


	@Override
	public String toString() {
		return "Customer [customer_id=" + customer_id + ", customer_name=" + customer_name + ", gender=" + gender
				+ ", father_name=" + father_name + ", mobile_no=" + mobile_no + ", email=" + email_id + ", adhaar_no="
				+ adhaar_no + ", pan_no=" + pan_no + ", date_of_birth=" + date_of_birth + ", address=" + address
				+ ", state=" + state + ", city=" + city + ", pincode=" + pincode + ", occupation_type="
				+ occupation_type + ", annual_income=" + annual_income + "]";
	}


	
	

	
	
}
