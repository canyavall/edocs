package edocsbackend.service;

import edocsbackend.domain.Contact;

public interface ContactService {

	Contact findById(Long id);
	
	Contact createNewContact(Contact contact);
	
	Contact updateContact (Contact contact);
}
