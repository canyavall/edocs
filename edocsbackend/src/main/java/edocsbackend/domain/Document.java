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
@Table(name="document")
@EqualsAndHashCode(exclude = {"id"})
public class Document {

	@JsonView(JsonViews.BasicDocument.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 120)
	private LocalDateTime created = LocalDateTime.now();
	
	@JsonView(JsonViews.BasicDocument.class)
	@Column(nullable = false, length = 75)
	private String path;
	
	@ManyToOne(optional=false)
	private User author;

	public Document(String path, User author) {
		this.path = path;
		this.author = author;
	}	
}
