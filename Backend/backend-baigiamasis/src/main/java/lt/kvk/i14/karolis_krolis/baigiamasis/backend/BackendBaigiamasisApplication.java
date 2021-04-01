package lt.kvk.i14.karolis_krolis.baigiamasis.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BackendBaigiamasisApplication {
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/*").allowedHeaders("*").allowedOriginPatterns("*")
				.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/user/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/loanPost/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
//				registry.addMapping("/api/isExpired").allowedHeaders("*").allowedOriginPatterns("*")
//						.allowedMethods("*").allowCredentials(true);
			}
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendBaigiamasisApplication.class, args);
	}

}
