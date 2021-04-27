package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.Message;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.MessageRepository;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/message")
public class MessageController {

    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @PostMapping("/sendMessage")
    String sendMessage(@RequestBody Message message, @RequestHeader("Authorization") String header){
        messageRepository.save(message);
        return "OK";
    }

}
