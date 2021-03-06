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
	interface TargetCategoryContact {}
	interface OriginCategoryContact {}
	interface ProfileUser extends BasicUser {}
	interface UserCategory extends BasicCategory {}
	
	//Lists	
	interface Categories extends BasicCategory{}	
	interface Users extends BasicUser {}
	interface Contacts extends BasicContact, TargetCategoryContact, OriginCategoryContact, UserCategory, BasicUser {}
	
	//Specific
	interface UserSend extends TargetCategoryTransaction, BasicDocument, BasicCategory {}		
	interface Category extends BasicUser, OriginUserTransaction, BasicDocument {}
	
	
}
