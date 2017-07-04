package edocsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edocsbackend.domain.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	//Select * from category where id = :id
	Category findById(Long id);

}
