package edocsbackend.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;

public class TransactionRepositoryTest extends AbstractEdocsbackendIntegrationTest  {

	@Autowired
	TransactionRepository transactionRepository;
	
	@Test
	public void findById(){
		assertThat(transactionRepository.findById(1L).getIsArchived()).isEqualTo(false);
		assertThat(transactionRepository.findById(5L).getSubject()).isEqualTo("Renting contract");
	}
}
