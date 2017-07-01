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
	List <User> findByUserTypeAndNameContaining(Boolean userType, String name);
	
	
}
