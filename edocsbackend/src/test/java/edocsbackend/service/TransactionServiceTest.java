package edocsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDateTime;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.domain.Category;
import edocsbackend.domain.Document;
import edocsbackend.domain.Transaction;
import edocsbackend.domain.User;
import edocsbackend.repository.TransactionRepository;

public class TransactionServiceTest  extends AbstractEdocsbackendIntegrationTest {

	@Autowired
	TransactionService transactionService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	CategoryService categoryService;
	
	@Autowired
	TransactionRepository transactionRepository;
	
	@Autowired
	DocumentService documentService;
	
	@Test
	public void findbyId(){
		assertThat(transactionService.findById(1L).getIsArchived()).isEqualTo(false);
	}
	
	@Test
	public void createTransaction(){
		assertThat(transactionRepository.count()).isEqualTo(6);
		User user = userService.findUserById(1L);
		Category cat = categoryService.findById(13L);
		Document doc = documentService.findById(4L);
		
		assertThat(cat.getTransactions().size()).isEqualTo(0);
		assertThat(user.getSendTransactions().size()).isEqualTo(2);
		
		Transaction trans = new Transaction("This is the document", null, false, false, false, doc, user, cat);
		transactionService.createTransaction(trans);
		assertThat(transactionRepository.count()).isEqualTo(7);
		assertThat(transactionService.findById(7L).getTargetCategory().getId()).isEqualTo(13L);
		
		//assertThat(cat.getTransactions().size()).isEqualTo(1);
		//assertThat(user.getSendTransactions().size()).isEqualTo(3);
		
	}
}
