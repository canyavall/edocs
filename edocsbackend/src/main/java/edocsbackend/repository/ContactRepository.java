package edocsbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import edocsbackend.domain.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long>{
	
	//Select * from contact where origin_user = :id
	List <Contact> findAllByOriginCategory(Long id);
	
	//Select * from contact where target_category = :id
	List <Contact> findAllByTargetCategory(Long id);
}
