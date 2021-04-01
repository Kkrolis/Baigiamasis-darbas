package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.LoanReason;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.LoanPostRepository;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.LoanReasonRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/loanReasons")
public class LoanReasonController {

    private final LoanReasonRepository repository;

    public LoanReasonController(LoanReasonRepository repository){this.repository = repository;}

    @GetMapping("/")
    List<LoanReason> getLoanReasons(@RequestHeader("Authorization") String header) { return repository.findAll();}
}
