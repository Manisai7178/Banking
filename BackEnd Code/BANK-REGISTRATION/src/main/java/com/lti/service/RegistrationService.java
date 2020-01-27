package com.lti.service;

import java.util.List;

import com.lti.model.Register;

public interface RegistrationService {
	public boolean doRegister(Register register);

	public List<Register> getRegistrations();
		
	
}
