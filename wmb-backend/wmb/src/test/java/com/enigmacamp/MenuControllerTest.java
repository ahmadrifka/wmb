//package com.enigmacamp;
//
//import static org.hamcrest.CoreMatchers.any;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.ArgumentMatcher;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//
//import com.enigmacamp.controller.MenuController;
//import com.enigmacamp.service.MenuService;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(MenuController.class)
//public class MenuControllerTest {
//
//	@Autowired
//	private MockMvc mockMvc;
//
//	@MockBean
//	private MenuService menuService;
//
//	@Test
//	public void getMenu_ShouldReturnMenu()throws Exception{
////		given(menuService.findAll(any))
//
//	mockMvc.perform(MockMvcRequestBuilders.get("/menu"))
//		.andExpect(status().isOk())
//		.andExpect(jsonPath("id").value(1))
//		.andExpect(jsonPath("name").value("Ayam Goreng"))
//		.andExpect(jsonPath("price").value(15000))
//		.andExpect(jsonPath("image").value("http://www.dapurkobe.co.id/wp-content/uploads/ayam-goreng-terasi.jpg"));
//
//	}
//}
