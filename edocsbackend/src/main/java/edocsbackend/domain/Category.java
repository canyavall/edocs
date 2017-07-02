package edocsbackend.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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

	public Category(String name, Boolean isGeneral, User user) {
		this.name = name;
		this.isGeneral = isGeneral;
		this.user = user;
	}	
}