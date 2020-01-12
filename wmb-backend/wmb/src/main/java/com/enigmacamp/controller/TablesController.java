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
import com.enigmacamp.entities.Tables;
import com.enigmacamp.service.TablesService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/tables")
public class TablesController {
	
	@Autowired
	TablesService tablesService;	

	@GetMapping()
	List<Tables> findAll() {
		return tablesService.findAll();
	}

	@PostMapping("/")
	Tables save(@RequestBody Tables table) throws Exception {
		return tablesService.save(table);
	}
	
	@PutMapping("/{id}")
	Tables update(@PathVariable("id") Integer id, @RequestBody Tables table) throws Exception{
		return tablesService.update(id,table);
	}

	@DeleteMapping("/{id}")
	Tables delete(@PathVariable("id") Integer id) {
		tablesService.delete(id);
		return null;
	}
	@GetMapping("/{id}")
	public Tables findMejaById(@PathVariable Integer id){
		return tablesService.findTableById(id);
	}

	
}
