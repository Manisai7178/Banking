package com.lti.dao;



import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import org.springframework.transaction.annotation.Transactional;

import com.lti.model.CustomerApplication;



@Repository
public class CustomerDaoImpl implements CustomerDao {
	@PersistenceContext
	private EntityManager entityManager;

	public CustomerDaoImpl() {
		;
	}

	@Override
	@Transactional
	public int createCustomer( CustomerApplication customer) {
		
		entityManager.persist(customer);
		
		return 1;
	}

	@Override
	public CustomerApplication readCustomerByC_id(int customer_id) {
		return entityManager.find(CustomerApplication.class,customer_id );
		
	}

	@Override
	public List<CustomerApplication> getAllCustomers() {
		String jpql = "From customer_registration";
		TypedQuery<CustomerApplication> typed = entityManager.createQuery(jpql, CustomerApplication.class);

		return typed.getResultList();
	}
}