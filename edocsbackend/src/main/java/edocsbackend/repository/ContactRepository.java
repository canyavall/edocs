package edocsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edocsbackend.domain.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>{
	
	//Select * from contact where id = :id
	Contact findById(Long id);
	
}
