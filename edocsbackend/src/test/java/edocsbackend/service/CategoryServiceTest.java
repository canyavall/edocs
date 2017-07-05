package edocsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.domain.Category;
import edocsbackend.domain.Contact;
import edocsbackend.repository.ContactRepository;

public class CategoryServiceTest extends AbstractEdocsbackendIntegrationTest {

	@Autowired
	CategoryService categoryService;
	
	@Autowired
	ContactRepository contactRepository;
	
	@Test
	public void testFindbyId(){
		//Check main data
		assertThat(categoryService.findById(5L).getName()).isEqualTo("Flights");
		assertThat(categoryService.findById(50L)).isNull();
	}
	
//	@Test
//	public void testAddContact(){
//		assertThat(contactRepository.count()).isEqualTo(5);
//		assertThat(categoryService.findById(1L).getOriginContacts().size()).isEqualTo(1);
//		assertThat(categoryService.findById(15L).getOriginContacts().size()).isEqualTo(1);
//		assertThat(categoryService.findById(15L).getTargetContacts().size()).isEqualTo(0);
//		
//		Category cat1 = categoryService.findById(1L);
//		Category cat2 = categoryService.findById(15L);
//		Contact contact = new Contact(cat1, cat2, 2, 2);
//		categoryService.addContact(contact);
//		
//		assertThat(contactRepository.count()).isEqualTo(6);
//		assertThat(categoryService.findById(1L).getOriginContacts().size()).isEqualTo(2);
//		assertThat(categoryService.findById(15L).getOriginContacts().size()).isEqualTo(1);
//		assertThat(categoryService.findById(15L).getTargetContacts().size()).isEqualTo(1);
//		assertThat(contactRepository.count()).isEqualTo(6);
//	}
	
//	@Test
//	public void testEditContact(){
//		assertThat(contactRepository.count()).isEqualTo(5);
//				
//		Category cat1 = categoryService.findById(1L);
//		Category cat2 = categoryService.findById(2L);
//		Contact contact = new Contact(cat1, cat2, 3, 3);
//		
//		categoryService.updateContact(contact);
//		
//	}
}
