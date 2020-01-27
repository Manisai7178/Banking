package com.lti.dao;

import java.util.List;

import com.lti.model.Register;

public interface RegistrationDao {

	public int registerForWeb(Register register);

	public List<Register> getAllRegistrations();
	
	public Register forRegistration(String userName);

	
}
