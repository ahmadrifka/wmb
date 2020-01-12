package com.enigmacamp.entities;

import java.sql.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity()
@Table(name="transaction")
public class Transaction {
	
	@Id()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable=false, length = 150)
	private String name;
	
	@Column(nullable=false, length = 150)
	private String status;
	
	@Column(nullable=false, length = 150)
	private Integer amount_of_customer;
	
	@Column(nullable=false, length = 150)
	private Integer payment;
	
	@Column(nullable=false, length = 150)
	private Integer total_Price;
	
	@Column(name="`change`",nullable=false, length = 150)
	private Integer change;
	
	@Column(nullable=false, length = 150)
	private Date date;
	
	@ManyToOne()
	@JoinColumn(name = "cashier_id")
	private Cashier cashier;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "tables_id")
	private Tables tables;
	
	@OneToMany(mappedBy = "transaction")
	private List<Orders> order;
	
	public Transaction () {
		this.date = new Date(System.currentTimeMillis());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	public Integer getAmount_of_customer() {
		return amount_of_customer;
	}

	public void setAmount_of_customer(Integer amount_of_customer) {
		this.amount_of_customer = amount_of_customer;
	}

	public Integer getPayment() {
		return payment;
	}

	public void setPayment(Integer payment) {
		this.payment = payment;
	}

	public Integer getTotal_Price() {
		return total_Price;
	}

	public void setTotal_Price(Integer total_Price) {
		this.total_Price = total_Price;
	}

	public Integer getChange() {
		return change;
	}

	public void setChange(Integer change) {
		this.change = change;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Tables getTables() {
		return tables;
	}

	public void setTables(Tables tables) {
		this.tables = tables;
	}

	public Cashier getCashier() {
		return cashier;
	}

	public void setCashier(Cashier cashier) {
		this.cashier = cashier;
	}
}
