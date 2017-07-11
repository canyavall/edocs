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
import edocsbackend.domain.JsonViews;
import edocsbackend.domain.User;
import edocsbackend.service.CategoryService;
import edocsbackend.service.UserService;

@RestController
@RequestMapping("/categories")
public class RestCategoryController {
	
	UserService userService;
	CategoryService categoryService;
	
	@Autowired
	public RestCategoryController (UserService userService, CategoryService categoryService){
		this.userService = userService;
		this.categoryService = categoryService;
	}
	
	@JsonView(JsonViews.Categories.class)
	@GetMapping
	public List<Category> retrieveUserCategories(@RequestHeader Long userId){
		return userService.findUserById(userId).getCategories();
	}
	
	@JsonView(JsonViews.Category.class)
	@GetMapping("/{id}")
	public Category retrieveCategory(@PathVariable Long id){
		return categoryService.findById(id);
	}
	
	//Expects {"userId": ?userId, "name": ?name }
	@JsonView(JsonViews.Categories.class)
	@PostMapping("/create")
	public Category createCategory(@RequestBody Map<String, String> json, @RequestHeader Long userId){		
		User user = userService.findUserById(userId);
		Category category = new Category(json.get("name"), false, user);
		userService.addUserCategory(category);
		return category;		
	}
	
	//Expects {"name": ?name}
	@PutMapping("/{id}")
	@CrossOrigin
	public void updateCategory(@RequestBody Map<String, String> json, @PathVariable Long id){
		Category category = categoryService.findById(id);
		category.setName(json.get("name"));
		userService.updateCategory(category);
	}
}
