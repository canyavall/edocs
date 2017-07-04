package edocsbackend.service;

import edocsbackend.domain.Category;
import edocsbackend.domain.Contact;

public interface CategoryService {

		Category findById(Long id);
		
		Category addOriginContact(Category category, Contact contact);
		
		Category updateOriginContact (Category category, Contact contact);
		
		Category addTargetContact(Category category, Contact contact);
		
		Category updateTargetContact (Category category, Contact contact);
}
