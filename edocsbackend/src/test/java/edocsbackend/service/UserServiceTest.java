package edocsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;

public class UserServiceTest extends AbstractEdocsbackendIntegrationTest{

	@Autowired
	UserService userService;
	
	@Autowired
	ContactService contactService;
	
	@Test
	public void findUserById(){
		assertThat(userService.findUserById(1L).getName()).isEqualTo("Jordynn");
	}
	
	@Test
	public void findAllUSersByTypeAndName(){
		assertThat(userService.findAllUSersByTypeAndName(true, "layne").size()).isEqualTo(1);
		assertThat(userService.findAllUSersByTypeAndName(false, "k").size()).isEqualTo(2);
	}
	
	@Test
	public void findContactInfo(){
		assertThat(userService.findContactInfo(2L).size()).isEqualTo(3);
		assertThat(userService.findContactInfo(2L)).containsExactlyInAnyOrder(contactService.findById(1L), contactService.findById(2L), contactService.findById(5L));
	}
}
