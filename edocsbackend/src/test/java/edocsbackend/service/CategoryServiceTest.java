package edocsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.repository.ContactRepository;

public class CategoryServiceTest extends AbstractEdocsbackendIntegrationTest {

	@Autowired
	CategoryService categoryService;
	
	@Autowired
	ContactRepository contactRepository;
	
	@Test
	public void testFindbyId(){
		//Check main data
		assertThat(categoryService.findById(5L).getName()).isEqualTo("Flights");
		assertThat(categoryService.findById(50L)).isNull();
		
		//Check transactions
		assertThat(categoryService.findById(9L).getTransactions().size()).isEqualTo(2);
	}
	
}
