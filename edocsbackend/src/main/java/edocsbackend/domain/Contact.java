package edocsbackend.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

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

	@JsonView(JsonViews.BasicContact.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 120)
	private LocalDateTime created = LocalDateTime.now();
	
	@ManyToOne(optional=false)
	private Category originCategory;
	
	@ManyToOne(optional=false)
	private Category targetCategory;
	
	@JsonView(JsonViews.BasicContact.class)
	@Column(nullable = false, length = 1)
	private int originStatus;
	
	@JsonView(JsonViews.BasicContact.class)
	@Column(nullable = false, length = 1)
	private int targetStatus;

	public Contact(Category originCategory, Category targetCategory, int originStatus, int targetStatus) {
		this.originCategory = originCategory;
		this.targetCategory = targetCategory;
		this.originStatus = originStatus;
		this.targetStatus = targetStatus;
	}	
}
