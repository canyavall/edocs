package edocsbackend.web;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import edocsbackend.domain.JsonViews;
import edocsbackend.domain.User;
import edocsbackend.service.UserService;

@RestController
public class RestSecurityController {

	UserService userService;
	
	@Autowired
	public RestSecurityController (UserService userService){
		this.userService = userService;
	}
	
	@JsonView(JsonViews.BasicUser.class)
	@PostMapping("/login")
	public User RestRetrieveUsers(@RequestBody Map<String, String> json){
		return userService.checkLogin(json.get("identityNumber"), json.get("password"));
	}
}
