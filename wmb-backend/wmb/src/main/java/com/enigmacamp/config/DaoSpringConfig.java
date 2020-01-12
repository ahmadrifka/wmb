package com.enigmacamp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.enigmacamp.service.impl.TransactionServiceImpl;
import com.enigmacamp.service.impl.CashierServiceImpl;
import com.enigmacamp.service.impl.OrdersServiceImpl;
import com.enigmacamp.service.impl.TablesServiceImpl;
import com.enigmacamp.service.impl.MenuServiceImpl;

@Configuration
public class DaoSpringConfig {
	
	@Bean
	public CashierServiceImpl kasirService() {
		return new CashierServiceImpl();
	}
	
	@Bean
	public TablesServiceImpl mejaService() {
		return new TablesServiceImpl();
	}
	
	@Bean
	public MenuServiceImpl menuService() {
		return new MenuServiceImpl();
	}
	
	@Bean
	public TransactionServiceImpl detailTransaksiService() {
		return new TransactionServiceImpl();
	}

	@Bean
	public OrdersServiceImpl ChoosenMenuService() {
		return new OrdersServiceImpl();
	}
}
