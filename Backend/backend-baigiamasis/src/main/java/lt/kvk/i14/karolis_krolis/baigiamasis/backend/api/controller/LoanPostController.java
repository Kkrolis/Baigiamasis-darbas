package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.LoanPost;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.User;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.LoanPostRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loanPost")
public class LoanPostController {

    private final LoanPostRepository repository;

    public LoanPostController(LoanPostRepository repository) {this.repository = repository;}

    @PostMapping("/addPost")
    LoanPost addLoanPost (@RequestBody LoanPost loanPost) {
        System.out.println("this is working");
        return repository.save((loanPost));
    }

    @GetMapping("/")
    List<LoanPost> returnAllLoanPosts (@RequestHeader("Authorization") String header) {
        return repository.findAll();
    }
}
