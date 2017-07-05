package edocsbackend.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;

public class CategoryRepositoryTest extends AbstractEdocsbackendIntegrationTest  {
	
	@Autowired
	CategoryRepository repo;
	
	@Test
	public void testFindById(){
		//Check main data
		assertThat(repo.findById(5L).getName()).isEqualTo("Flights");
		assertThat(repo.findById(50L)).isNull();
		
		//Check transactions
		assertThat(repo.findById(9L).getTransactions().size()).isEqualTo(2);
	}
	
}
