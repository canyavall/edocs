package edocsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edocsbackend.domain.Transaction;
import edocsbackend.repository.TransactionRepository;

@Transactional(readOnly = true)
@Service
public class DefaultTransactionService implements TransactionService {

	private final TransactionRepository transactionRepository;
	
	@Autowired
	public DefaultTransactionService(TransactionRepository transactionRepository) {
		this.transactionRepository = transactionRepository;
	}

	@Transactional(readOnly = false)
	@Override
	public Transaction createTransaction(Transaction transaction) {
		return transactionRepository.save(transaction);
	}

	@Override
	public Transaction findById(Long id) {
		return transactionRepository.findById(id);
	}

}
