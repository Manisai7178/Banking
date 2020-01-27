package com.lti.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Entity
@Scope(scopeName="prototype")
@Component
@Table(name="register")
public class Register {
 
	@Id
	@Column(name="customer_username")
	private String userName;
	@Column(name="account_no")
	private long accountNo;
	@Column(name="customer_password")
	private String customer_password;
	@Column(name="transaction_password")
	private String transaction_password;
	
	
	public Register() {
		super();
	}
	
	public Register(String userName, long accountNo, String customer_password, String transaction_password) {
		super();
		this.userName = userName;
		this.accountNo = accountNo;
		this.customer_password = customer_password;
		this.transaction_password = transaction_password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public long getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(long accountNo) {
		this.accountNo = accountNo;
	}

	public String getCustomer_password() {
		return customer_password;
	}

	public void setCustomer_password(String customer_password) {
		this.customer_password = customer_password;
	}

	public String getTransaction_password() {
		return transaction_password;
	}

	public void setTransaction_password(String transaction_password) {
		this.transaction_password = transaction_password;
	}

	@Override
	public String toString() {
		return "Register [userName=" + userName + ", accountNo=" + accountNo + ", customer_password="
				+ customer_password + ", transaction_password=" + transaction_password + "]";
	}

	
	
	
	
}
