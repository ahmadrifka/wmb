package com.enigmacamp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.enigmacamp.entities.Transaction;
import com.enigmacamp.entities.Tables;
import com.enigmacamp.entities.Orders;
import com.enigmacamp.repositories.TransactionRepository;
import com.enigmacamp.service.TransactionService;
import com.enigmacamp.service.TablesService;
import com.enigmacamp.service.MenuService;
import com.enigmacamp.service.OrdersService;

public class TransactionServiceImpl implements TransactionService {

	@Autowired
	TransactionRepository transactionRepository;

	@Autowired
	MenuService menuService;

	@Autowired
	TablesService tableService;

	@Autowired
	OrdersService orderService;

	@Autowired
	TransactionService transactionService;

	// This method validation for update transaction
	public void validationUpdate(Transaction transaction) throws Exception {
	transaction.setChange(transaction.getPayment()-transaction.getTotal_Price());
	if(transaction.getPayment() < transaction.getTotal_Price()) {
		throw new Exception("your payment is insufficient");
		}
	if (transaction.getPayment() == null) {
		throw new Exception("Payment cannot be null");
		}
	}

	// This method for payment to total price
	public void payment(Transaction transaction) throws Exception {
		List<Orders> orders = orderService.findOrderByTransactionId(transaction.getId());
		Integer totalPrice = 0;
		for(Orders order : orders) {
			Integer total = order.getTotal();
			totalPrice = totalPrice + total;
		}
		transaction.setTotal_Price(totalPrice);
	}

	// This method validation for save transaction
	public void validationSave(Transaction transaction) throws Exception {
		Tables table = tableService.findTableById(transaction.getTables().getId());
		if (transaction.getName().equals(null)) {
			throw new Exception("Name cannot be null");
		}
		if (transaction.getAmount_of_customer() == null) {
			throw new Exception("Amount of customer cannot be null");
		}
		if (transaction.getAmount_of_customer() > table.getCapacity()) {
			throw new Exception("Maximum table capacity");
		}
		if (table.getStatus().equals("Non Available")) {
			throw new Exception("Table Not Available");
		}
	}

	@Override
	public Transaction save(Transaction transaction) throws Exception {
		validationSave(transaction);
		Tables table = tableService.findTableById(transaction.getTables().getId());
		transaction.setStatus("Unpaid");
		table.setStatus("Non Available");
		transaction.getTables().setStatus("Non Available");
		return transactionRepository.save(transaction);
	}

	@Override
	public Transaction saveTotalPrice(Transaction transaction) throws Exception  {
		payment(transaction);
		return transactionRepository.save(transaction);
	}

	@Override
	public Transaction update(Integer id, Transaction transaction) throws Exception {
		Tables table = tableService.findTableById(transaction.getTables().getId());
		table.setStatus("Available");
		transaction.getTables().setStatus("Available");
		transaction.setStatus("Already paid");
		payment(transaction);
		validationUpdate(transaction);
		return transactionRepository.save(transaction);
	}

	@Override
	public List<Transaction> findAll()  {
		return transactionRepository.findAll();
	}

	@Override
	public Transaction findTransactionById(Integer id)  {
		return transactionRepository.getOne(id);
	}

	@Override
	public Transaction findTransactionByStatus(Transaction transaction) {
		return transactionRepository.findTransactionByStatus(transaction);
	}

}
