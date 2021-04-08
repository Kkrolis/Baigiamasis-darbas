package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.LoanReason;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.LoanPostRepository;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.LoanReasonRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loanReasons")
public class LoanReasonController {

    private final LoanReasonRepository repository;

    public LoanReasonController(LoanReasonRepository repository){this.repository = repository;}

    @GetMapping("/")
    List<LoanReason> getLoanReasons(@RequestHeader("Authorization") String header) { return repository.findAll();}

    @GetMapping("/{id}")
    public LoanReason getOneReasoById(@RequestHeader("Authorization") String header, @PathVariable(value = "id") int id) {
        return repository.findById(id).orElseThrow(() -> new ReasonNotFoundExeption(id));
    }
}

class ReasonNotFoundExeption extends RuntimeException {
    ReasonNotFoundExeption(int id) {
        super ("Reason not found with id: " + id);
    }
}
