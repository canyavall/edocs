package edocsbackend.domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="user")
@ToString(exclude={"password", "sendTransactions", "categories"})
@EqualsAndHashCode(exclude = {"id", "password"})
public class User {

	@JsonView(JsonViews.BasicUser.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 120)
	private LocalDateTime created = LocalDateTime.now();
	
	@JsonView(JsonViews.BasicUser.class)
	@Column(nullable = false, length = 120)
	private String name;
	
	@JsonView(JsonViews.BasicUser.class)
	@Column(length = 75)
	private String surname;
	
	@JsonView(JsonViews.ProfileUser.class)
	@Column(nullable = false, name="identity_number", length = 10, unique = true)
	private String identityNumber;
	
	@JsonView(JsonViews.BasicUser.class)
	@Column(name = "is_company", nullable = false, length = 1)
	private Boolean isCompany;
	
	@JsonView(JsonViews.ProfileUser.class)
	@Column(nullable = false, length = 120)
	private String email;
	
	@JsonView(JsonViews.Users.class)
	@Column(nullable = false, length = 20)
	private String country;
	
	@JsonView(JsonViews.ProfileUser.class)
	@Column(nullable = false, length = 2)
	private String language;
	
	@Column(nullable = false, length = 20)
	private String password;
		
	@JsonView(JsonViews.ProfileUser.class)
	@Column(nullable = false, length = 20)
	private String token;
	
	@JsonView(JsonViews.Categories.class)
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL, orphanRemoval=true)
	private List <Category> categories = new ArrayList<>();
	
	@JsonView(JsonViews.UserSend.class)
	@OneToMany(mappedBy="originUser", cascade=CascadeType.ALL, orphanRemoval=true)
	private List <Transaction> sendTransactions = new ArrayList<>();;
	
	public User(String name, String surname, String identityNumber, Boolean isCompany, String email, String country,
			String language, String password, String token, List<Category> categories, List<Transaction> sendTransactions) {
		this.name = name;
		this.surname = surname;
		this.identityNumber = identityNumber;
		this.isCompany = isCompany;
		this.email = email;
		this.country = country;
		this.language = language;
		this.password = password;
		this.categories = categories;
		this.sendTransactions = sendTransactions;
		this.token = token;
	}
	
	public User(String name, String surname, String identityNumber, Boolean isCompany, String email, String country,
			String language, String password, String token) {
		this.name = name;
		this.surname = surname;
		this.identityNumber = identityNumber;
		this.isCompany = isCompany;
		this.email = email;
		this.country = country;
		this.language = language;
		this.password = password;
		this.token = token;
	}
	
	public void addSendTransaction (Transaction transaction){
		this.sendTransactions.add(transaction);
	}
	
	public void addCategory(Category category) {
		this.getCategories().add(category);
	}
	
	public void addTransaction(Transaction transaction){
		this.sendTransactions.add(transaction);
	}
	
}
