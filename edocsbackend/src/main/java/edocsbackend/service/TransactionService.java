package edocsbackend.service;

import edocsbackend.domain.Transaction;

public interface TransactionService {
	
	Transaction findById(Long id);
	
	Transaction createTransaction(Transaction transaction);
}
