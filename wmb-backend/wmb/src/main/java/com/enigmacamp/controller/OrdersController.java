package com.enigmacamp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.enigmacamp.entities.Orders;
import com.enigmacamp.service.OrdersService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/orders")
public class OrdersController {
	
	@Autowired
	OrdersService orderService;	

	@GetMapping("/")
	List<Orders> findAll() {
		return orderService.findAll();
	}
	
	@GetMapping("/transaction/{id}")
	List<Orders> findByTransactionId(@PathVariable int id) {
		return orderService.findOrderByTransactionId(id);
	}

	@PostMapping("/")
	Orders save(@RequestBody Orders order) throws Exception {
		return orderService.save(order);
	}
	
	@PutMapping("/{id}")
	Orders update(@PathVariable("id") Integer id, @RequestBody Orders order)throws Exception{
		return orderService.update(id,order);
	}
	
	@DeleteMapping("/{id}")
	Orders delete(@PathVariable("id") Integer id) {
		orderService.delete(id);
		return null;
	}
	
	@GetMapping("/{id}")
	public Orders findById(@PathVariable Integer id){
		return orderService.findOrderMenuById(id);
	}
	
	@GetMapping("listorder/{id}")
	public List<Orders> findOrderByTransactionId(@PathVariable("id") Integer id){
		return orderService.findOrderByTransactionId(id);
		}

}
