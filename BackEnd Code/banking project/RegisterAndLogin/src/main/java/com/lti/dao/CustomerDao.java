package com.lti.dao;



import java.util.List;

import com.lti.model.CustomerApplication;;

public interface CustomerDao {
	public int createCustomer(CustomerApplication customer);
	public CustomerApplication readCustomerByC_id(int customer_id);
	public List<CustomerApplication> getAllCustomers();
	
}