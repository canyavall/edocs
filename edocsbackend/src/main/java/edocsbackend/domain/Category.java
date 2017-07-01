package edocsbackend.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="category")
public class Category {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 25)
	private String name;
	
	@Column(nullable = false)
	private Boolean isGeneral;
	
	@Column(nullable = false)
	private Boolean isArchive;

	@ManyToOne(optional=false)
	private User user;

	public Category(String name, Boolean isGeneral, Boolean isArchive, User user) {
		this.name = name;
		this.isGeneral = isGeneral;
		this.isArchive = isArchive;
		this.user = user;
	}	
}
