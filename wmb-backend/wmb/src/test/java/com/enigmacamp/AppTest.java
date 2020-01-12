//package com.enigmacamp;
//
//import org.assertj.core.api.Assertions;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import com.enigmacamp.entities.Menu;
//import com.enigmacamp.entities.Tables;
//import com.enigmacamp.repositories.TablesRepository;
//import com.enigmacamp.repositories.MenuRepository;
//import com.enigmacamp.service.TablesService;
//import com.enigmacamp.service.MenuService;
//
//import junit.framework.Assert;
//import junit.framework.TestCase;
//import junit.framework.TestSuite;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
//public class AppTest extends TestCase {
//
//
//	@Autowired
//	private TestRestTemplate restTemplate;
//
//	@MockBean
//	private MenuRepository menuRepo;
//
//	 @Test
//	    public void testGetAllMenu() throws Exception{
//	        //arrange
//
//		 	//act
//		 	ResponseEntity<Menu> response =restTemplate.getForEntity("/menu", Menu.class);
//
//		 	//assert
//		 	Assertions.assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
//		 	Assertions.assertThat(response.getBody().getId()).isEqualTo(1);
//		 	Assertions.assertThat(response.getBody().getName()).isEqualTo("Ayam Goreng");
//		 	Assertions.assertThat(response.getBody().getPrice()).isEqualTo(15000);
//		 	Assertions.assertThat(response.getBody().getImage()).isEqualTo("http://www.dapurkobe.co.id/wp-content/uploads/ayam-goreng-terasi.jpg");
//	    }
//	}
//
//
//
//
//
////    /**
////     * Create the test case
////     *
////     * @param testName name of the test case
////     */
////    public AppTest( String testName )
////    {
////        super( testName );
////    }
////
////    /**
////     * @return the suite of tests being tested
////     */
////    public static Test suite()
////    {
////        return new TestSuite( AppTest.class );
////    }
////
////    /**
////     * Rigourous Test :-)
////     */
////    public void testApp()
////    {
////        assertTrue( true );
////    }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////}
