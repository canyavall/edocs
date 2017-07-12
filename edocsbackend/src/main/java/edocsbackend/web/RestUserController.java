package edocsbackend.web;

import java.util.Iterator;
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

import edocsbackend.domain.JsonViews;
import edocsbackend.domain.Transaction;
import edocsbackend.domain.User;
import edocsbackend.service.UserService;

@RestController
@RequestMapping("/user")
public class RestUserController {

	private final UserService userService;
	
	@Autowired
	public RestUserController (UserService userService){
		this.userService = userService;
	}
		
	//Expects { 
	//			"id": ?id, 
	//			"name": ?name, 
	//			"surname": ?surname, 
	//			"email": ?email 
	//   		}
	@PutMapping("/profile")
	@CrossOrigin
	public void RestEditUser(@RequestBody Map<String, String> json){
		User user = userService.findUserById(Long.parseLong( json.get( "id" ) ));
		user.setName(json.get("name"));
		user.setSurname(json.get("surname"));
		user.setEmail(json.get("email"));
		userService.updateUser(user);
	}
	
	//Expects { 
	//			"isCompany": ?isCompany,  
	//			"name": ?name,
	//			"country": ?country
	//			}
	@JsonView(JsonViews.Users.class)
	@GetMapping("/users")
	public List <User> RestRetrieveUsers(@RequestHeader Boolean isCompany, @RequestHeader String name, @RequestHeader String country){
		//Check the name has at least 3 letters
		if (name.length() < 3) return null;
		return userService.findAllUSersByTypeAndName(isCompany, name, country);
	}
	
	//THis must be changed, but I'm out of time....
	@JsonView(JsonViews.UserSend.class)
	@GetMapping("/sent/{id}")
	public List <Transaction> RestRetrieveSendTransactions(@PathVariable Long id){
		User user = userService.findUserById(id);
		List <Transaction> transactions = user.getSendTransactions();
		for (int i = 0; i < transactions.size(); i++) {
			transactions.get(i).setOriginUser(user);
		}
		return transactions;		
	}
	
	@JsonView(JsonViews.ProfileUser.class)
	@GetMapping("/profile/{token}")
	public User RestRetrieveProfile(@PathVariable String token){
		return userService.findUserByToken(token);		
	}
	
	@JsonView(JsonViews.ProfileUser.class)
	@PostMapping("/login")
	public User RestCheckLogin(@RequestBody Map<String, String> json){
		System.out.println(json.get("identityNumber"));
		return userService.checkLogin(json.get("identityNumber"), json.get("password"));
	}
}
