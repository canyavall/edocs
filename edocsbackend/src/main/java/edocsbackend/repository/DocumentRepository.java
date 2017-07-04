package edocsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edocsbackend.domain.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {

	//Select * from document where id = :id
	Document findById(Long id);
	
}
