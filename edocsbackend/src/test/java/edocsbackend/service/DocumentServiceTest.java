package edocsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.domain.Document;
import edocsbackend.domain.User;
import edocsbackend.repository.DocumentRepository;

public class DocumentServiceTest extends AbstractEdocsbackendIntegrationTest{
	
	@Autowired
	DocumentService documentService;
	
	@Autowired
	DocumentRepository documentRepository;
	
	@Autowired
	UserService userService;
	
	@Test
	public void findById(){
		assertThat(documentService.findById(1L).getPath()).isEqualTo("/docs/doc1.pdf");
	}
	
	@Test
	public void createNewDocument(){
		assertThat(documentRepository.count()).isEqualTo(5);
		User user = userService.findUserById(1L);
		Document doc = new Document("/docs/doc6.pdf", user);
		documentService.createNewDocument(doc);
		assertThat(documentRepository.count()).isEqualTo(6);
	}
}
