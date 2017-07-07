package edocsbackend.web;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import edocsbackend.domain.Category;
import edocsbackend.domain.Contact;
import edocsbackend.domain.JsonViews;
import edocsbackend.service.CategoryService;
import edocsbackend.service.ContactService;
import edocsbackend.service.UserService;

@RestController
@RequestMapping("/contacts")
public class RestContactController {

	ContactService contactService;
	UserService userService;
	CategoryService categoryService;
	
	@Autowired
	public RestContactController(ContactService contactService, UserService userService, CategoryService categoryService){
		this.contactService = contactService;
		this.userService = userService;
		this.categoryService = categoryService;
	}
	
	@JsonView(JsonViews.Contacts.class)
	@GetMapping
	public List<Contact> retrieveUserContacts(@RequestHeader Long id){
		return userService.findContactInfo(id);
	}
	
	@PostMapping("/create")
	public void createContact(@RequestBody Map<String, String> json){
		Category originCategory = categoryService.findById(Long.parseLong(json.get("originCategory")));
		Category targetCategory = categoryService.findById(Long.parseLong(json.get("targetCategory")));
		Contact contact = new Contact (originCategory, targetCategory, Integer.parseInt(json.get("originStatus")), Integer.parseInt(json.get("targetStatus")));
		contactService.createNewContact(contact);
	}
	
	@PutMapping("/{id}")
	@CrossOrigin
	public void updateContact(@RequestBody Map<String, String> json, @PathVariable Long id){
		Contact contact = contactService.findById(id);
		contact.setOriginStatus(Integer.parseInt(json.get("originStatus")));
		contact.setTargetStatus(Integer.parseInt(json.get("targetStatus")));
		System.out.println("ORIGIN STATUS"+contact.getOriginStatus());
		contactService.updateContact(contact);
		contact = contactService.findById(id);
		System.out.println("ORIGIN STATUS"+contact.getOriginStatus());
	}
}
