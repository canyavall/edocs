package edocsbackend.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import edocsbackend.domain.Contact;
import edocsbackend.domain.JsonViews;
import edocsbackend.service.ContactService;
import edocsbackend.service.UserService;

@RestController
@RequestMapping("/contacts")
public class RestContactController {

	ContactService contactService;
	UserService userService;
	
	@Autowired
	public RestContactController(ContactService contactService, UserService userService){
		this.contactService = contactService;
		this.userService = userService;
	}
	
	@JsonView(JsonViews.BasicContact.class)
	@GetMapping("/{id}")
	public List<Contact> retrieveUserContacts(@PathVariable Long id){
		return userService.findContactInfo(id);
	}
}
