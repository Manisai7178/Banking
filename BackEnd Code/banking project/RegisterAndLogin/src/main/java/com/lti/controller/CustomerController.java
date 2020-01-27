package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.model.CustomerApplication;
import com.lti.service.CustomerService;



@RestController
@RequestMapping(path = "customers")
@CrossOrigin
public class CustomerController {

	@Autowired
	private CustomerService service;

	// http://localhost:9090/customers
	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> addCustomer(@RequestBody CustomerApplication customer) {
		ResponseEntity<String> response;
		boolean result=service.addCustomer(customer);
		if(result)
		{
		response=new ResponseEntity<String>("Customer  is added",HttpStatus.CREATED);	
		}
		else
		{
			response=new ResponseEntity("Customer is not added",HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;

	}
	// http://localhost:9090/customers
		@RequestMapping(path="{customer_id}" ,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
		public CustomerApplication findCustomerByC_id(@PathVariable("customer_id") int customer_id) {
			CustomerApplication customer = service.findCustomerByC_id(customer_id);
			return customer;
		}
		public List<CustomerApplication> findAllCustomer() {
			List<CustomerApplication> customer = service.getAllCustomer();

			return customer;
		}

	
}
