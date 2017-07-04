package edocsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edocsbackend.domain.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long>{
	
	Contact findById(Long id);
}
