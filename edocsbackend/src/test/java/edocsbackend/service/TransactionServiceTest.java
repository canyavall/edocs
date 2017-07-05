package edocsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;

public class TransactionServiceTest  extends AbstractEdocsbackendIntegrationTest {

	@Autowired
	TransactionService transactionService;
	
	@Test
	public void findbyId(){
		assertThat(transactionService.findById(1L).getIsArchived()).isEqualTo(false);
	}
	
}
