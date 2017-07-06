package edocsbackend.service;

import java.util.List;

import edocsbackend.domain.Category;

public interface CategoryService {

		Category findById(Long id);
		
		List <Category> findAll();

}
