package edocsbackend.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import edocsbackend.domain.Category;
import edocsbackend.domain.JsonViews;
import edocsbackend.service.CategoryService;
import edocsbackend.service.TransactionService;

@RestController
@RequestMapping("/transactions")
public class RestTransactionController {

	CategoryService categoryService;
	TransactionService transactionService;
	
	@Autowired
	public RestTransactionController (TransactionService transactionService, CategoryService categoryService){
		this.transactionService = transactionService;
		this.categoryService = categoryService;
	}

	@JsonView(JsonViews.Category.class)
	@PutMapping("/archive/{id}")
	public Category retrieveCategory(@PathVariable Long id){
		return categoryService.findById(id);
	}
	
}
