package com.enigmacamp.service;

import java.util.List;

import com.enigmacamp.entities.Orders;
public interface OrdersService {
	
	Orders save(Orders order) throws Exception;
	Orders delete(Integer id);
	Orders findOrderMenuById(Integer id);
	List<Orders> findAll();
	List<Orders> findOrderByTransactionId(Integer id);
	Orders update(Integer id, Orders order) throws Exception;
}
