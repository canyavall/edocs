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
import edocsbackend.repository.UserRepository;

public class UserServiceTest extends AbstractEdocsbackendIntegrationTest{

	@Autowired
	UserService userService;
	
	@Autowired
	DocumentService documentService;
		
	@Autowired
	ContactService contactService;
	
	@Autowired
	CategoryService categoryService;
	
	@Autowired
	UserRepository userRepository;

	@Autowired
	TransactionRepository transactionRepository;
	
	@Test
	public void findUserById(){
		assertThat(userService.findUserById(1L).getName()).isEqualTo("Jordynn");
	}
	
	@Test
	public void findAllUSersByTypeAndName(){
		assertThat(userService.findAllUSersByTypeAndName(true, "layne", "United States").size()).isEqualTo(1);
		assertThat(userService.findAllUSersByTypeAndName(false, "k", "United States").size()).isEqualTo(2);
	}
	
	@Test
	public void findContactInfo(){
		assertThat(userService.findContactInfo(2L).size()).isEqualTo(3);
		assertThat(userService.findContactInfo(2L)).containsExactlyInAnyOrder(contactService.findById(1L), contactService.findById(2L), contactService.findById(5L));
	}
	
	@Test
	public void createUSer(){
		assertThat(userRepository.count()).isEqualTo(10);
		User user = new User("Dead", "Pool", "69696969", false, "deadpool@thebest.com", "USA", "en", "hellokitty", "QFfFP0N3VcpJESSiW4zh");
		userService.createUser(user);
		assertThat(userRepository.count()).isEqualTo(11);
	}
	
	@Test
	public void updateuser(){
		User user = userService.findUserById(5L);
		user.setName("Macarena");
		userService.updateUser(user);
		assertThat(userService.findUserById(5L).getName()).isEqualTo("Macarena");
	}
	
	@Test
	public void addCategory(){
		User user = userService.findUserById(5L);
		assertThat(user.getCategories().size()).isEqualTo(1);
		Category category = new Category("Flights", false, user, null);
		userService.addUserCategory(category);
		assertThat(user.getCategories().size()).isEqualTo(2);
		assertThat(user.getCategories().get(1).getName()).isEqualTo("Flights");
		assertThat(user.getCategories().get(1).getTransactions()).isNull();
	}
	
	@Test
	public void updateCategory(){
		User user = userService.findUserById(5L);
		Category cat = user.getCategories().get(0);
		assertThat(cat.getName()).isEqualTo("General");
		cat.setName("Tickets");
		userService.updateCategory(cat);
		assertThat(user.getCategories().get(0).getName()).isEqualTo("Tickets");
	}
	
	@Test
	public void addSendingTransaction(){
		Document doc = documentService.findById(3L);
		User user = userService.findUserById(1L);
		Category cat = categoryService.findById(1L);
		Transaction transaction = new Transaction("This is the document", null, false, false, false, doc, user, cat);
		//Check user transactions, category transactions and database
		assertThat(user.getSendTransactions().size()).isEqualTo(2);
		assertThat(cat.getTransactions().size()).isEqualTo(0);
		assertThat(transactionRepository.count()).isEqualTo(6);
		
		userService.addSendingTransaction(transaction);
		
		assertThat(user.getSendTransactions().size()).isEqualTo(3);
		assertThat(cat.getTransactions().size()).isEqualTo(1);
		assertThat(transactionRepository.count()).isEqualTo(7);
	}
	
}
