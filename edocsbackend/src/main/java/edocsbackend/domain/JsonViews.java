package edocsbackend.domain;

import com.fasterxml.jackson.annotation.JsonView;

/**
 * Views for use with {@link JsonView @JsonView}.
 */
public interface JsonViews {

	//Basics
	interface BasicUser {}	
	interface BasicDocument {}	
	interface BasicCategory {}	
	interface BasicTransaction {}
	interface BasicContact {}
	
	//Complements	
	interface TargetCategoryTransaction extends BasicTransaction {}	
	interface OriginUserTransaction extends BasicTransaction {}
	
	//Lists	
	interface Categories extends BasicCategory{}	
	interface Users extends BasicUser {}
	
	//Specific
	interface UserSend extends TargetCategoryTransaction, BasicDocument {}		
	interface Category extends BasicUser, OriginUserTransaction, BasicDocument {}
	
	

}
