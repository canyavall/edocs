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
		userRepository.save(user);
		user.addCategory(new Category("General", true, user));
		return user;
	}
	
	@Transactional(readOnly = false)
	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> findAllUSersByTypeAndName(Boolean userType, String name) {
		return userRepository.findByUserTypeAndNameIgnoreCaseContaining(userType, name);
	}

	@Override
	public User findUserById(Long id) {
		return userRepository.findById(id);
	}

	@Transactional(readOnly = false)
	@Override
	public User addCategory(User user, Category category) {
		user.addCategory(category);
		return user;
	}
	
	@Transactional(readOnly = false)
	@Override
	public User updateCategory(User user, Category category) {
		for( Category c : user.getCategories()){
			if (c.getId() == category.getId()){
				c.setName(category.getName());
			}
		}
		return user;
	}
	
	@Transactional(readOnly = false)
	@Override
	public User addSendingTransaction(User user, Transaction transaction) {
		user.addSendTransaction(transaction);
		return user;
	}

	@Transactional(readOnly = false)
	@Override
	public User updateSendingTransaction(User user, Transaction transaction) {
		for (Transaction t : user.getSendTransactions()){
			if (t.getId() == transaction.getId()){
				t = transaction;
				break;
			}
		}
		return user;
	}

	@Override
	public List<Contact> findContactInfo(Long id) {
		return userRepository.findContactInfo(id);
	}

}
