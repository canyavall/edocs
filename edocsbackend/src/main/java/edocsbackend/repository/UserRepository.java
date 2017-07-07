package edocsbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edocsbackend.domain.Contact;
import edocsbackend.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	//Select * from User where id = :id
	User findById(Long id);
	
	//Select * from User where type ? :type and name like :name
	List <User> findByIsCompanyAndNameIgnoreCaseContainingAndCountryIgnoreCaseContaining(Boolean isCompany, String name, String country);
	
	@Query("SELECT co FROM  "
			+ "User as us, Category as ca, Contact as co WHERE "
			+ "us.id = ?1 AND "
			+ "ca.user = us.id AND "
			+ "(co.originCategory = ca.id OR co.targetCategory = ca.id)")
	List <Contact> findContactInfo(Long id);
}
