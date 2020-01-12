package com.enigmacamp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.enigmacamp.entities.Menu;
import com.enigmacamp.entities.Orders;
import com.enigmacamp.entities.Transaction;
import com.enigmacamp.repositories.OrdersRepository;
import com.enigmacamp.service.MenuService;
import com.enigmacamp.service.OrdersService;
import com.enigmacamp.service.TransactionService;


public class OrdersServiceImpl implements OrdersService{

	@Autowired
	OrdersRepository orderRepository;
	
	@Autowired
	OrdersService orderService;
	
	@Autowired
	MenuService menuService;
	
	@Autowired
	TransactionService transactionService;
	
	//This method validation for orders save 
	public void validation (Orders order) throws Exception {
		if(order.getQty() == null) {
			throw new Exception("Quantity cannot be null");
		}
		if(order.getMenu() == null) {
			throw new Exception("Menu cannot be null");
		}
	}
	
	@Override
	public Orders save(Orders order) throws Exception {
		validation(order);
		Menu menu = menuService.findMenuById(order.getMenu().getId());
		Integer price = menu.getPrice();
		order.setTotal(order.getQty()*price);
		Orders saveOrder = orderRepository.save(order);
		Transaction transaction = transactionService.findTransactionById(order.getTransaction().getId());
		transactionService.saveTotalPrice(transaction);
		return saveOrder;
	}
	
	@Override
	public Orders update(Integer id, Orders order) throws Exception{
		return orderRepository.save(order);
	}

	@Override
	public Orders delete(Integer id) {
		orderRepository.deleteById(id);
		return null;
	}

	@Override
	public Orders findOrderMenuById(Integer id) {
		return orderRepository.getOne(id);
	}

	@Override
	public List<Orders> findAll() {
		return orderRepository.findAll();
	}
	
	@Override
	public List<Orders> findOrderByTransactionId(Integer id) {
		return orderRepository.findOrderByTransactionId(id);
	}
}
