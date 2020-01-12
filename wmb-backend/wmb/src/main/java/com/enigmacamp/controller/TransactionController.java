package com.enigmacamp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.enigmacamp.entities.Transaction;
import com.enigmacamp.service.TransactionService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/transaction")
public class TransactionController {
	
	@Autowired
	TransactionService transactionService;
	
	@GetMapping()
	List<Transaction> findAll() throws Exception {
		return transactionService.findAll();
	}

	@PostMapping("/")
	Transaction save(@RequestBody Transaction transaction) throws Exception {
		return transactionService.save(transaction);
	}

	@GetMapping("/{id}")
	public Transaction findtransactionById(@PathVariable Integer id) throws Exception{
		return transactionService.findTransactionById(id);
	}
	
	@PutMapping("/{id}")
	Transaction update(@PathVariable("id") Integer id ,@RequestBody Transaction transaction) throws Exception {
		return transactionService.update(id, transaction);
	}

}
