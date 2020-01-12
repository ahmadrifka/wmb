package com.enigmacamp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enigmacamp.entities.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Integer>{

	public List<Orders> findOrderByTransactionId(Integer id);
	
	
}
