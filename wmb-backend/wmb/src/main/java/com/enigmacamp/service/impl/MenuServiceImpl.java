package com.enigmacamp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.enigmacamp.entities.Menu;
import com.enigmacamp.repositories.MenuRepository;
import com.enigmacamp.service.MenuService;

public class MenuServiceImpl implements MenuService{
	
	@Autowired
	MenuRepository menuRepository;
	
	//This method validation for Menu save
	public void validation (Menu menu) throws Exception {
	if(StringUtils.isEmpty(menu.getName())) {
		throw new Exception("Name cannot be null");
	}
	if(menu.getPrice() == null) {
		throw new Exception("Price cannot be null");
	}
	}
	
	@Override
	public Menu save(Menu menu) throws Exception {
	validation(menu);
		return menuRepository.save(menu);
	}

	@Override
	public Menu update(Integer id, Menu menu)throws Exception{
		return menuRepository.save(menu);
	}
	
	@Override
	public List<Menu> findAll() {
		return menuRepository.findAll();
	}

	@Override
	public Menu findMenuById(Integer id) {
		return menuRepository.getOne(id);
	}

	@Override
	public Menu delete(Integer id) {
	menuRepository.deleteById(id);
		return null;
	}

}
