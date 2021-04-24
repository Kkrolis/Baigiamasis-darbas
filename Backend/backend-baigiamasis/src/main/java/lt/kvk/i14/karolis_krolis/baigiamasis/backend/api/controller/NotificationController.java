package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.Notification;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.NotificationRepository;
import org.aspectj.weaver.ast.Not;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {
    private final NotificationRepository repository;

    public NotificationController(NotificationRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/send")
    Notification sendNotification(@RequestHeader("Authorization") String header, @RequestBody Notification notification){
        notification.setStatus("TOREAD");
        return repository.save(notification);
    }

    @GetMapping("/get/{id}")
    public Notification getOneNotification(@RequestHeader("Authorization") String header, @PathVariable(value = "id") int id) {
        return repository.findById(id);
    }

    @GetMapping("/read/{id}")
    public void readNotification(@RequestHeader("Authorization") String header, @PathVariable(value = "id") int id) {
        Notification notification = repository.findById(id);
        notification.setStatus("RECEIVED");
        repository.save(notification);
    }
}
