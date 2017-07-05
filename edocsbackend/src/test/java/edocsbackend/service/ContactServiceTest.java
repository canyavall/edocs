package edocsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.domain.Contact;
import edocsbackend.repository.ContactRepository;

public class ContactServiceTest extends AbstractEdocsbackendIntegrationTest {

	@Autowired
	ContactService contactService;
	
	@Autowired
	CategoryService categoryService;
	
	@Autowired
	ContactRepository contactRepository;
	
	@Test
	public void findById(){
		assertThat(contactService.findById(1L).getOriginStatus()).isEqualTo(1);
	}
	
	@Test
	public void createNewContact(){
		assertThat(contactRepository.count()).isEqualTo(5);
		Contact contact = new Contact(categoryService.findById(13L),categoryService.findById(16L),2,1);
		contactService.createNewContact(contact);
		assertThat(contactRepository.count()).isEqualTo(6);
	}
	
	@Test
	public void updateContact(){
		assertThat(contactService.findById(1L).getOriginStatus()).isEqualTo(1);
		contactService.findById(1L).setOriginStatus(2);
		assertThat(contactService.findById(1L).getOriginStatus()).isEqualTo(2);
	}
}
