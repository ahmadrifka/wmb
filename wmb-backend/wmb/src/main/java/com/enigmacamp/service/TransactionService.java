package com.enigmacamp.service;

import java.util.List;
import com.enigmacamp.entities.Transaction;

public interface TransactionService {

	Transaction save(Transaction transaction) throws Exception;
	List<Transaction> findAll();
	Transaction findTransactionById(Integer id);
	Transaction update (Integer id, Transaction transaction) throws Exception;
	Transaction saveTotalPrice(Transaction transaction) throws Exception;
	Transaction findTransactionByStatus(Transaction transaction);
	
}
