package edocsbackend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edocsbackend.service.UserService;

@RestController
@RequestMapping("/users")
public class RestUserController {

	UserService userService;
	
	@Autowired
	public RestUserController (UserService userService){
		this.userService = userService;
	}
		
}
