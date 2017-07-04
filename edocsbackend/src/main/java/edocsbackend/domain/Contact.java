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
	
	@Column(nullable = false, length = 1)
	private int originStatus;
	
	@Column(nullable = false, length = 1)
	private int targetStatus;
	
	@ManyToOne(optional=false)
	private Category originCategory;
	
	@ManyToOne(optional=false)
	private Category targetCategory;

	public Contact(LocalDateTime created, Category originCategory, Category targetCategory, int originStatus, int targetStatus) {
		this.created = created;
		this.originCategory = originCategory;
		this.targetCategory = targetCategory;
		this.originStatus = originStatus;
		this.targetStatus = targetStatus;
	}	
}
