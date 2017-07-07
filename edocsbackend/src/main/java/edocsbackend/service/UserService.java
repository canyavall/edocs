package edocsbackend.service;

import java.util.List;

import edocsbackend.domain.Category;
import edocsbackend.domain.Contact;
import edocsbackend.domain.Transaction;
import edocsbackend.domain.User;

public interface UserService {

	User createUser(User user);
	
	User updateUser(User user);
	
	List <User> findAllUSersByTypeAndName(Boolean userType, String name, String country);
	
	User findUserById (Long id);
	
	List <Contact> findContactInfo(Long id);
	
	User addUserCategory(Category category);
	
	User updateCategory(Category category);
	
	User addSendingTransaction(Transaction transaction);
}
