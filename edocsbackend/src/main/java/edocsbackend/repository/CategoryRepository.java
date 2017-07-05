package edocsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edocsbackend.domain.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	//Select * from category where id = :id
	Category findById(Long id);

}
