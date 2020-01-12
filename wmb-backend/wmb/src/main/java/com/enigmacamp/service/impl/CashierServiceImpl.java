package com.enigmacamp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.enigmacamp.entities.Cashier;
import com.enigmacamp.repositories.CashierRepository;
import com.enigmacamp.service.CashierService;

public class CashierServiceImpl implements CashierService {

	@Autowired
	CashierRepository cashierRepository;
	
	//This method validation for save cashier
	public void validation (Cashier cashier) throws Exception {
	if(StringUtils.isEmpty(cashier.getName()) || StringUtils.isEmpty(cashier.getPassword())) {
		throw new Exception("Name or Password cannot be null");
	}
	}
	
	@Override
	public Cashier save(Cashier cashier) throws Exception {
	validation(cashier);	
	return cashierRepository.save(cashier);
	}
	
	@Override
	public Cashier update(Integer id, Cashier cashier) throws Exception{
		return cashierRepository.save(cashier);	
	}

	@Override
	public List<Cashier> findAll() {
		return cashierRepository.findAll();
	}

	@Override
	public Cashier delete(Integer id) {
		cashierRepository.deleteById(id);
		return null;
	}

	@Override
	public Cashier findCashierById(Integer id) {
		return cashierRepository.getOne(id);
	}
	
}
