package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.User;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.UserRepository;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.util.CreditScoreUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository repository;
    private CreditScoreUtil creditScoreUtil = new CreditScoreUtil();

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/register")
    User addUser (@RequestBody User newUser) {
        System.out.println("this is working");
        int defaultScore = 50;
        newUser.setCreditScore(defaultScore);
        newUser.setCreditGroup(creditScoreUtil.setCreditGroupe(defaultScore));
        return repository.save((newUser));
    }

    @GetMapping("/users")
    List<User> allUsersOnlyIdAndUserName (@RequestHeader("Authorization") String header) {
        return repository.findAll();
    }

    @GetMapping("/{userName}")
    public ResponseEntity<User> findUserByName(@RequestHeader("Authorization") String header, @PathVariable(value = "userName") String userName) {
        Optional<User> user = Optional.ofNullable(repository.findByUserName(userName));

        if(user.isPresent()){
            return ResponseEntity.ok().body(user.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
