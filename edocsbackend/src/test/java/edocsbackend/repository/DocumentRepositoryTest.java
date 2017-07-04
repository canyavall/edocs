package edocsbackend.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import edocsbackend.AbstractEdocsbackendIntegrationTest;
import edocsbackend.domain.Document;

public class DocumentRepositoryTest extends AbstractEdocsbackendIntegrationTest  {

	@Autowired
	DocumentRepository repo;
	
	@Autowired
	UserRepository userRepo;
	
	@Test
	public void findById(){
		assertThat(repo.findById(1L).getPath()).isEqualTo("/docs/doc1.pdf");
	}
	
	@Test
	public void createDocument(){
		assertThat(repo.count()).isEqualTo(5);
		Document doc1 = new Document("/docs/doc6.pdf", userRepo.findById(1L));
		repo.save(doc1);
		assertThat(repo.count()).isEqualTo(6);
		assertThat(repo.findById(6L).getPath()).isEqualTo("/docs/doc6.pdf");
	}
	
}
