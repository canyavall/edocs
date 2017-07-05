package edocsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edocsbackend.domain.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long>{
	
	Transaction findById(Long id);
	
}
