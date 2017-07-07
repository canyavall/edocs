package edocsbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edocsbackend.domain.Category;
import edocsbackend.domain.Contact;
import edocsbackend.domain.Transaction;
import edocsbackend.domain.User;
import edocsbackend.repository.UserRepository;

@Transactional(readOnly = true)
@Service
public class DefaultUserService implements UserService {


	private final UserRepository userRepository;
	
	
	@Autowired
	public DefaultUserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User createUser(User user) {
		User currentUser = userRepository.save(user);
		Category category = new Category("General", true, currentUser, null);
		currentUser.addCategory(category);
		return currentUser;
	}
	
	@Transactional(readOnly = false)
	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> findAllUSersByTypeAndName(Boolean userType, String name, String country) {
		return userRepository.findByIsCompanyAndNameIgnoreCaseContainingAndCountryIgnoreCaseContaining(userType, name, country);
	}

	@Override
	public User findUserById(Long id) {
		return userRepository.findById(id);
	}

	@Transactional(readOnly = false)
	@Override
	public User addUserCategory(Category category) {
		User user = category.getUser();
		user.addCategory(category);
		return user;
	}
	
	@Transactional(readOnly = false)
	@Override
	public User updateCategory(Category category) {
		for( Category c : category.getUser().getCategories()){
			if (c.getId() == category.getId()){
				c.setName(category.getName());
			}
		}
		return category.getUser();
	}
	
	@Override
	public User addSendingTransaction(Transaction transaction) {
		//Add the transaction into the user sendtransaction and
		// into the transaction list of the category target
		transaction.getOriginUser().addSendTransaction(transaction);
		transaction.getTargetCategory().addTransaction(transaction);
		return transaction.getOriginUser();
	}
		
	@Override
	public List<Contact> findContactInfo(Long id) {
		return userRepository.findContactInfo(id);
	}

}
