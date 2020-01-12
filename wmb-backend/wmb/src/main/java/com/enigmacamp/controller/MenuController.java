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
import com.enigmacamp.entities.Menu;
import com.enigmacamp.service.MenuService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/menu")
public class MenuController {

	@Autowired
	MenuService menuService;	

	@GetMapping()
	List<Menu> findAll() {
		return menuService.findAll();
	}

	@PostMapping("/")
	Menu save(@RequestBody Menu menu) throws Exception {
		return menuService.save(menu);
	}
	
	@PutMapping("/{id}")
	Menu update(@PathVariable("id")Integer id, @RequestBody Menu menu)throws Exception{
		return menuService.update(id,menu);
	}
	
	@DeleteMapping("/{id}")
	Menu delete(@PathVariable("id") Integer id) {
		menuService.delete(id);
		return null;
	}
	
	@GetMapping("/{id}")
	public Menu findMenuById(@PathVariable Integer id){
		return menuService.findMenuById(id);
	}

}
