package edocsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edocsbackend.domain.Document;
import edocsbackend.repository.DocumentRepository;

@Transactional(readOnly = true)
@Service
public class DefaultDocumentService implements DocumentService {

	private final DocumentRepository documentRepository;
	
	@Autowired
	public DefaultDocumentService(DocumentRepository documentRepository) {
		this.documentRepository = documentRepository;
	}

	@Transactional(readOnly = false)
	@Override
	public Document createNewDocument(Document document) {
		return documentRepository.save(document);
	}

	@Override
	public Document findById(Long id) {
		return documentRepository.findById(id);
	}

}
