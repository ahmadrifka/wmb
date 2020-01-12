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
import org.springframework.web.bind.annotation.RestController;
import com.enigmacamp.entities.Cashier;
import com.enigmacamp.service.CashierService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/cashier")
public class CashierController {
	
	@Autowired
	CashierService cashierService;	

	@GetMapping()
	List<Cashier> findAll() {
		return cashierService.findAll();
	}

	@PostMapping("/")
	Cashier save(@RequestBody Cashier cashier) throws Exception {
		return cashierService.save(cashier);
	}
	
	@PutMapping("/{id}")
	Cashier update(@PathVariable("id")Integer id, @RequestBody Cashier cashier) throws Exception{
		return cashierService.update(id, cashier);
	}
	
	@DeleteMapping("/{id}")
	Cashier delete(@PathVariable("id") Integer id) {
		cashierService.delete(id);
		return null;
	}

	@GetMapping("/{id}")
	public Cashier findKasirById(@PathVariable Integer id){
		return cashierService.findCashierById(id);
	}

}
