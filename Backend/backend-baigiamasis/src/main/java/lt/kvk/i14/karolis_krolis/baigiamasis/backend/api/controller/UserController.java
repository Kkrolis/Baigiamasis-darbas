package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.User;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/register")
    User addUser (@RequestBody User newUser) {
        System.out.println("this is working");
        return repository.save((newUser));
    }
}
