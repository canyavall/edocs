package edocsbackend.web;

import javax.servlet.http.HttpServletRequest;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Global {@link ControllerAdvice @ControllerAdvice}.
 */
@ControllerAdvice
public class GlobalControllerAdvice {

	@ResponseStatus(HttpStatus.CONFLICT)
	@ExceptionHandler(DataIntegrityViolationException.class)
	public void handleDataIntegrityViolationException(DataIntegrityViolationException ex, HttpServletRequest request) {
	}

}
