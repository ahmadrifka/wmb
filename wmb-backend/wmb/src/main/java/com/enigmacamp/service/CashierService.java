package com.enigmacamp.service;

import java.util.List;
import com.enigmacamp.entities.Cashier;

public interface CashierService {
	
	Cashier save(Cashier kasir) throws Exception;
	Cashier delete(Integer id);
	List<Cashier> findAll();
	Cashier findCashierById(Integer id);
	Cashier update(Integer id, Cashier cashier) throws Exception;

}
