package edocsbackend.security;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/", "/index.html", "/favicon.ico", "/css/**", "/images/**", "/js/**",
			"/webjars/**");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// @formatter:off
		http
			.mvcMatcher("/user/**")
				.authorizeRequests()
					.mvcMatchers(POST, "user/login").permitAll()
					.mvcMatchers(POST, "user/register").permitAll()
					.mvcMatchers(GET, "user/profile/{token}").permitAll()
					.mvcMatchers(GET, "user/users").permitAll()
					.mvcMatchers(GET, "user/sent/{id}").permitAll()
			.and()

			.mvcMatcher("/categories/**")
				.authorizeRequests()
					.mvcMatchers(GET,  "/categories").permitAll() // Get all categories (no transactions)
					.mvcMatchers(GET,  "/categories/{id}").permitAll() // Get category by id and transactions
					.mvcMatchers(POST,  "/categories/create").permitAll() // Create new category
					.mvcMatchers(DELETE,  "/categories/{id}").permitAll() // Delete category
					.mvcMatchers(PUT,  "/categories/{id}").permitAll() // Edit category
			.and()
			.mvcMatcher("/transactions/**")
			.authorizeRequests()
				.mvcMatchers(PUT,  "/archive/{id}").permitAll() // Get all categories (no transactions)
			.and()
			.mvcMatcher("/contacts/**")
				.authorizeRequests()
					.mvcMatchers(GET,  "/contacts").permitAll() // Get contacts by user
					.mvcMatchers(POST,  "/contacts/create").permitAll() // Create new contact for origin and target category
					.mvcMatchers(PUT,  "/contacts/{id}").permitAll() // Edit a contact
			.and()
			
			.mvcMatcher("/**")
				.authorizeRequests()
					.mvcMatchers("/**").denyAll()
			.and()
			
			.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
			.csrf()
				.disable()
			.cors()
				.and()
			.httpBasic();
		// @formatter:on
	}
	 
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
		    @Override
		    public void addCorsMappings(CorsRegistry registry) {
		        registry.addMapping("/**").allowedOrigins("*");
		    }
		
		};
	}
}
