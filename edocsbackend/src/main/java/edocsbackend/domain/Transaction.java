package edocsbackend.domain;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="transaction")
@EqualsAndHashCode(exclude = {"id"})
public class Transaction {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(nullable = false, length = 120)
	private LocalDateTime created = LocalDateTime.now();
	
	@Column(length = 2000)
	private String subject;
	
	@Column(length = 120)
	private LocalDateTime opened;
	
	@Column(nullable = false)
	private Boolean isSigned;
	
	@Column(nullable = false)
	private Boolean isArchived;
	
	@Column(nullable = false)
	private Boolean isRequestedSignature;
	
	@ManyToOne(optional=false)
	private Document document;
	
	@ManyToOne(optional=false)
	private User originUser;
	
	@ManyToOne(optional=false)
	private Category targetCategory;

	public Transaction(LocalDateTime created, String subject, LocalDateTime opened, Boolean isSigned,
			Boolean isArchived, Boolean isRequestedSignature, Document document, User originUser, Category targetCategory) {
		this.created = created;
		this.subject = subject;
		this.opened = opened;
		this.isSigned = isSigned;
		this.isArchived = isArchived;
		this.isRequestedSignature = isRequestedSignature;
		this.document = document;
		this.originUser = originUser;
		this.targetCategory = targetCategory;
	}
	
	
}
