package edocsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edocsbackend.domain.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{
	
	//select * from transaction where id = :id
	Transaction findById(Long id);

}
