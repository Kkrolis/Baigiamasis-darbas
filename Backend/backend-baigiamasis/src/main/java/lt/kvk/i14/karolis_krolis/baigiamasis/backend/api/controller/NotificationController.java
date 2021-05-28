package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.LoanPost;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.Notification;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.LoanPostRepository;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.NotificationRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {
    private final NotificationRepository repository;
    private final LoanPostRepository loanPostRepository;

    public NotificationController(NotificationRepository repository, LoanPostRepository loanPostRepository) {
        this.repository = repository;
        this.loanPostRepository = loanPostRepository;
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

    @DeleteMapping("/del/{id}")
    public String deleteNotification(@RequestHeader("Authorization") String header, @PathVariable(value = "id") int id){
        Notification notification = repository.findById(id);
        LoanPost loanPost = notification.getLoanPost();
        repository.deleteById(id);
        loanPostRepository.deleteById(loanPost.getLoanPostId());
        return "deleted";
    }
}
