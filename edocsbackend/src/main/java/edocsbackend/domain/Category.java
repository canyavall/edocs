package edocsbackend.domain;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="category")
@EqualsAndHashCode(exclude = {"id"})
public class Category {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 120)
	private LocalDateTime created = LocalDateTime.now();
	
	@Column(nullable = false, length = 25)
	private String name;
	
	@Column(nullable = false)
	private Boolean isGeneral;
	
	@ManyToOne(optional=false)
	private User user;
	
	@OneToMany(mappedBy="targetCategory", cascade=CascadeType.ALL, orphanRemoval=true)
	private List <Transaction> transactions;
	
	@OneToMany(mappedBy="originCategory", cascade=CascadeType.ALL, orphanRemoval=true)
	private List <Contact> originContacts;
	
	@OneToMany(mappedBy="targetCategory", cascade=CascadeType.ALL, orphanRemoval=true)
	private List <Contact> targetContacts;

	public Category(String name, Boolean isGeneral, User user, List <Transaction> transactions, List <Contact> originContacts, List <Contact> targetContacts) {
		this.name = name;
		this.isGeneral = isGeneral;
		this.user = user;
		this.transactions = transactions;
		this.originContacts = originContacts;
		this.targetContacts = targetContacts;
	}
	
	public void addTransaction (Transaction transaction){
		this.transactions.add(transaction);
	}
	
	public void addOriginContact(Contact contact){
		this.originContacts.add(contact);
	}
	
	public void addTargetContact(Contact contact){
		this.targetContacts.add(contact);
	}
}
