package edocsbackend.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.domain.User;

public class UserRepositoryTest extends AbstractEdocsbackendIntegrationTest {

	@Autowired
	UserRepository repo;
	
	@Test
	public void testCount (){
		assertThat(repo.count()).isEqualTo(10);
	}
	
	@Test
	public void testAddUser(){
		assertThat(repo.count()).isEqualTo(10);
		User user = new User("Dead", "Pool", "69696969", false, "deadpool@thebest.com", "USA", "en", "hellokitty");
		repo.save(user);
		assertThat(repo.count()).isEqualTo(11);
		assertThat(repo.findById(11L).getName()).isEqualTo("Dead");
	}
	

	@Test
	public void testFindByTypeAndName(){
		List<User> usersTest = repo.findByIsCompanyAndNameIgnoreCaseContaining(false, "Kobe");
		assertThat(usersTest.get(0).getName()).isEqualTo("Kobe");
	}
	
	@Test
	public void testFindAll(){
		assertThat(repo.findAll().size()).isEqualTo((int) repo.count());
	}
	
	@Test
	public void testCategories(){
		User userTest = repo.findById(2L);
		assertThat(userTest.getCategories().size()).isEqualTo(3);
	}
	
	@Test
	public void testTransactions(){
		assertThat(repo.findById(1L).getSendTransactions().size()).isEqualTo(2);
	}
	
	@Test
	public void testFindContactInfo(){
		assertThat(repo.findContactInfo(4L).size()).isEqualTo(1);
	}
}
