package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.User;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @GetMapping("/users")
    List<User> allUsersOnlyIdAndUserName (@RequestHeader("Authorization") String header) {
//        List<User> users = new ArrayList<>();
//        List<Object> objArr = repository.getAllUsersOnlyIdAndUserName();
//        for (Object obj : objArr)
//        {
//            Object[] objList = (Object[])obj;
//            User user = new User();
//            user.setId((Integer) objList[0]);
//            user.setUserName((String) objList[1]);
//            users.add(user);
//        }
        return repository.findAll();
    }
}
