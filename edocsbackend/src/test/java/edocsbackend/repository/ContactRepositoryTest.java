package edocsbackend.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.domain.Contact;

public class ContactRepositoryTest  extends AbstractEdocsbackendIntegrationTest  {

	@Autowired
	ContactRepository contactRepository;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Test
	public void count(){
		assertThat(contactRepository.count()).isEqualTo(5);
	}
	
	@Test
	public void findById(){
		assertThat(contactRepository.findById(1L).getOriginCategory().getId()).isEqualTo(1L);
	}
	
	@Test
	public void createContact(){
		assertThat(contactRepository.count()).isEqualTo(5);
		Contact contact = new Contact(categoryRepository.findById(4L),categoryRepository.findById(12L),2,2);
		contactRepository.save(contact);
		assertThat(contactRepository.count()).isEqualTo(6);
		assertThat(contactRepository.findById(6L).getOriginStatus()).isEqualTo(2);
	}
	
	@Test
	public void editContact(){		
		Contact contact = contactRepository.findById(1L);
		
		assertThat(contact.getOriginStatus()).isEqualTo(1);
		contact.setOriginStatus(3);
		
		assertThat(contactRepository.findById(1L).getOriginStatus()).isEqualTo(3);
	}
}
