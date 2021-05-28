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
				registry.addMapping("http://localhost:4200/").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);

				registry.addMapping("/api/*").allowedHeaders("*").allowedOriginPatterns("*")
				.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/user/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/loanPost/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/loanPost/addPost").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/loanReasons/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/loanReasons/").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/userName/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/notification/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/notification/get/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/notification/read/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/room/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/room/createRoom").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/room/getRoom/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/message/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/message/sendMessage").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
				registry.addMapping("/api/notification/del/*").allowedHeaders("*").allowedOriginPatterns("*")
						.allowedMethods("*").allowCredentials(true);
			}
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendBaigiamasisApplication.class, args);
	}

}
