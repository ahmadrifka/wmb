package com.enigmacamp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.enigmacamp.entities.Tables;
import com.enigmacamp.repositories.TablesRepository;
import com.enigmacamp.service.TablesService;
import com.enigmacamp.service.MenuService;

public class TablesServiceImpl implements TablesService{
	
	@Autowired
	TablesRepository tableRepository;
	
	@Autowired
	MenuService menuService;
	
	//This method validation for tables save
	public void validation(Tables table) throws Exception {
	if(StringUtils.isEmpty(table.getName())) {
		throw new Exception("Name cannot be null");
	}
	if(StringUtils.isEmpty(table.getStatus())) {
		throw new Exception("Status cannot be null");
	}
	if(table.getCapacity() == null) {
		throw new Exception("Capacity cannot be null");
	}
	}
	
	@Override
	public Tables save(Tables table) throws Exception {
		validation(table);
		return tableRepository.save(table);
	}
	
	@Override
	public Tables update(Integer id, Tables table)throws Exception{
		return tableRepository.save(table);
	}

	@Override
	public List<Tables> findAll() {
		return tableRepository.findAll();
	}

	@Override
	public Tables findTableById(Integer id) {
		return tableRepository.getOne(id);
	}

	@Override
	public Tables delete(Integer id) {
		tableRepository.deleteById(id);
		return null;
	}

}
