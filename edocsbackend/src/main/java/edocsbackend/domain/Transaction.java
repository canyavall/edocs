package edocsbackend.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

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

	@JsonView(JsonViews.BasicTransaction.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@JsonView(JsonViews.BasicTransaction.class)
	@Column(nullable = false, length = 120)
	private LocalDateTime created = LocalDateTime.now();
	
	@JsonView(JsonViews.BasicTransaction.class)
	@Column(length = 2000)
	private String subject;
	
	@JsonView(JsonViews.BasicTransaction.class)
	@Column(length = 120)
	private LocalDateTime opened;
	
	@JsonView(JsonViews.BasicTransaction.class)
	@Column(nullable = false)
	private Boolean isSigned;
	
	@JsonView(JsonViews.BasicTransaction.class)
	@Column(nullable = false)
	private Boolean isArchived;
	
	@JsonView(JsonViews.BasicTransaction.class)
	@Column(nullable = false)
	private Boolean isRequestedSignature;
	
	@JsonView(JsonViews.BasicTransaction.class)
	@ManyToOne(optional=false)
	private Document document;
	
	@JsonView(JsonViews.OriginUserTransaction.class)
	@ManyToOne(optional=false)
	private User originUser;
	
	@JsonView(JsonViews.TargetCategoryTransaction.class)
	@ManyToOne(optional=false)
	private Category targetCategory;

	public Transaction(String subject, LocalDateTime opened, Boolean isSigned, Boolean isArchived,
					   Boolean isRequestedSignature, Document document, User originUser, Category targetCategory) {
		this.subject = subject;
		this.opened = opened;
		this.isSigned = isSigned;
		this.isArchived = isArchived;
		this.isRequestedSignature = isRequestedSignature;
		this.document = document;
		this.originUser = originUser;
		this.targetCategory = targetCategory;
	}
	
	@JsonIgnore
	public User getOriginUser(){
		return this.originUser;
	}
	
	@JsonIgnore
	public Category getTargetCategory(){
		return this.targetCategory;
	}
}
