package edocsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edocsbackend.domain.Category;
import edocsbackend.domain.Contact;
import edocsbackend.repository.CategoryRepository;

@Transactional(readOnly = true)
@Service
public class DefaultCategoryService implements CategoryService {

	private final CategoryRepository categoryRepository;
	
	@Autowired
	public DefaultCategoryService(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	@Override
	public Category findById(Long id) {
		return categoryRepository.findById(id);
	}

}
