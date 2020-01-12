package com.enigmacamp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.enigmacamp.entities.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

	public Transaction findTransactionByStatus(Transaction transaction);

}
