package com.enigmacamp.service;

import java.util.List;
import com.enigmacamp.entities.Menu;

public interface MenuService {

	Menu save(Menu menu) throws Exception;
	Menu findMenuById(Integer id);
	List<Menu> findAll();
	Menu delete(Integer id);
	Menu update(Integer id, Menu menu) throws Exception;
}
