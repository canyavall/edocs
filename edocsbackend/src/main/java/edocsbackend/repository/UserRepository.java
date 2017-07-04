package edocsbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edocsbackend.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	//Select * from User where id = :id
	User findById(Long id);
	
	//Select * from User where type ? :type and name like :name
	List <User> findByUserTypeAndNameIgnoreCaseContaining(Boolean userType, String name);
	
//	@Query("SELECT us.name, ca.name, co.origin_status, co.target_status FROM  "
//			+ "user as us, category as ca, contact as co WHERE "
//			+ "us.id = :id AND "
//			+ "ca.user_id = us.id AND "
//			+ "(co.origin_category_id = ca.id OR co.target_category_id = ca.id)")
//	List <Contact> findContactInfo(Long id);
}
