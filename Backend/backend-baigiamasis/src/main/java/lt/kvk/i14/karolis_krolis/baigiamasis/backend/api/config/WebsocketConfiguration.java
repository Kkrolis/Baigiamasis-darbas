package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.service.ChatWebSocketHandler;

@Configuration
@EnableWebSocket
public class WebsocketConfiguration implements WebSocketConfigurer{

	private final static String CHAT_ENDPOINT = "api/chat";
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		// TODO Auto-generated method stub
		registry.addHandler(getWebSocketHandler(), CHAT_ENDPOINT)
		.setAllowedOrigins("*");
	}
	
	@Bean
	public WebSocketHandler getWebSocketHandler() {
		return new ChatWebSocketHandler();
	}

//	@Override
//	public void registerStompEndpoints(StompEndpointRegistry registry) {
//		registry.addEndpoint("/chat").setAllowedOrigins("*").withSockJS();
//	}
//
//	@Override
//	public void configureMessageBroker(MessageBrokerRegistry registry) {
//		registry.setApplicationDestinationPrefixes("/app").enableSimpleBroker("/topic");
//	}
	
}
