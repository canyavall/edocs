package edocsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edocsbackend.domain.Contact;
import edocsbackend.repository.ContactRepository;

@Transactional(readOnly = true)
@Service
public class DefaultContactService implements ContactService {

	private final ContactRepository contactRepository;
	
	@Autowired
	public DefaultContactService (ContactRepository contactRepository){
		this.contactRepository = contactRepository;
	}
	
	@Override
	public Contact findById(Long id) {
		return contactRepository.findById(id);
	}

}
