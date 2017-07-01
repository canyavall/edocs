package edocsbackend.domain;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
@ToString(exclude="password")
@EqualsAndHashCode(exclude = {"id", "password"})
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 120)
	private LocalDateTime created = LocalDateTime.now();
	
	@Column(nullable = false, length = 120)
	private String name;
	
	@Column(length = 75)
	private String surname;
	
	@Column(nullable = false, name="identity_number", length = 10, unique = true)
	private String identityNumber;
	
	@Column(name = "user_type", nullable = false, length = 1)
	private Boolean userType;
	
	@Column(nullable = false, length = 120)
	private String email;
	
	@Column(nullable = false, length = 20)
	private String country;
	
	@Column(nullable = false, length = 2)
	private String language;
	
	@Column(nullable = false, length = 20)
	private String password;
	
	@OneToMany(mappedBy="user", cascade=CascadeType.ALL, orphanRemoval=true)
	private List <Category> categories;

	public User(String name, String surname, String identityNumber, Boolean userType, String email, String country,
			String language, String password, List<Category> categories) {
		this.name = name;
		this.surname = surname;
		this.identityNumber = identityNumber;
		this.userType = userType;
		this.email = email;
		this.country = country;
		this.language = language;
		this.password = password;
		this.categories = categories;
	}
	
}
