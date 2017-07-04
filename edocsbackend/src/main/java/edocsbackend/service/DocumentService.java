package edocsbackend.service;

import edocsbackend.domain.Document;

public interface DocumentService {
	
	Document createNewDocument(Document document);
	
	Document findById(Long id);
	
}
