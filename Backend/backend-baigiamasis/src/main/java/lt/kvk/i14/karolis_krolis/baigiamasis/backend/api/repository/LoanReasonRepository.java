package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.LoanReason;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanReasonRepository extends JpaRepository<LoanReason, Integer> {
}
