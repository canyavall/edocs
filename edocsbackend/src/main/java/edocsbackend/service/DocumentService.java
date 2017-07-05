package edocsbackend.service;

import edocsbackend.domain.Document;

public interface DocumentService {
	
	Document findById(Long id);
	
	Document createNewDocument(Document document);
		
}
