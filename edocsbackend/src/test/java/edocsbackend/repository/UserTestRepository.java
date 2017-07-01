package edocsbackend.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.domain.User;

public class UserTestRepository extends AbstractEdocsbackendIntegrationTest {

	@Autowired
	UserRepository repo;
	
	@Test
	public void testCount (){
		assertThat(repo.count()).isEqualTo(10);
	}
	
	@Test
	public void testAddUser(){
		assertThat(repo.count()).isEqualTo(10);
		User user = new User("Dead", "Pool", "69696969", false, "deadpool@thebest.com", "USA", "en", "hellokitty", null);
		repo.save(user);
		assertThat(repo.count()).isEqualTo(11);
		assertThat(repo.findById(11L).getName()).isEqualTo("Dead");
	}
}
