package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.LoanPost;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.LoanReason;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.LoanPostRepository;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.LoanReasonRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/loanPost")
public class LoanPostController {

    private final LoanPostRepository repository;
    private final LoanReasonRepository reasonRepository;

    public LoanPostController(LoanPostRepository repository, LoanReasonRepository reasonRepository) {this.repository = repository;
        this.reasonRepository = reasonRepository;
    }

    @PostMapping("/addPost")
    LoanPost addLoanPost (@RequestBody LoanPost loanPost) {
        System.out.println("this is working");
        if (loanPost.getReason() != null) {
            return repository.save((loanPost));
        } else {
            loanPost.setReason(reasonRepository.findById(1).get());
            return repository.save(loanPost);
        }
    }

    @GetMapping("/")
    List<LoanPost> returnAllLoanPosts (@RequestHeader("Authorization") String header) {
        return repository.findAll();
    }
}
