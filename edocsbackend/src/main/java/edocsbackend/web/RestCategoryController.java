package edocsbackend.web;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import edocsbackend.domain.JsonViews;

import edocsbackend.domain.Category;
import edocsbackend.service.CategoryService;
import edocsbackend.service.UserService;

@RestController
@RequestMapping("/categories")
public class RestCategoryController {

	UserService userService;
	
	CategoryService categoryService;
	
	@JsonView(JsonViews.Categories.class)
	@GetMapping
	public List <Category> retrieveUserCategories(@RequestHeader Long userId){
		return userService.findUserById(userId).getCategories();
	}
}
