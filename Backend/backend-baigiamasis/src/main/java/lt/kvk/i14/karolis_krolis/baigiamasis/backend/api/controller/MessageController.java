package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.Message;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.User;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.UserRepository;

@RestController
public class MessageController {
	
	@Autowired
	private UserRepository repository;
	@Autowired
	private SimpMessagingTemplate simpMessagingTemplate;

	@MessageMapping("/send/message")
	public void sendMessage(Message message) {
		System.out.println("mssg: " + message);

			simpMessagingTemplate.convertAndSend("/message/");
		} 
		
	}

