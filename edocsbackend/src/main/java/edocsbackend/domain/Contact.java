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
@Table(name="contact")
@EqualsAndHashCode(exclude = {"id"})
public class Contact {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 120)
	private LocalDateTime created = LocalDateTime.now();
	
	@Column
	private int Status;
	
	@ManyToOne(optional=false)
	private User originUser;
	
	@ManyToOne(optional=false)
	private Category targetCategory;

	public Contact(LocalDateTime created, int status, User originUser, Category targetCategory) {
		this.created = created;
		this.Status = status;
		this.originUser = originUser;
		this.targetCategory = targetCategory;
	}	
}
