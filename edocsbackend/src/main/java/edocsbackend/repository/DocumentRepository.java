package edocsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edocsbackend.domain.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

	//Select * from document where id = :id
	Document findById(Long id);
	
}
