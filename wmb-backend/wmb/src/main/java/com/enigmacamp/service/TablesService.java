package com.enigmacamp.service;

import java.util.List;
import com.enigmacamp.entities.Tables;

public interface TablesService {

	Tables save(Tables table) throws Exception;
	Tables findTableById(Integer id);
	List<Tables> findAll();
	Tables delete(Integer id);
	Tables update(Integer id, Tables table) throws Exception;
	
	
}
