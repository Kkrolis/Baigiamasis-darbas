package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.LoanPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LoanPostRepository extends JpaRepository<LoanPost, Integer> {

//    @Query(value = "SELECT c FROM LOANPOST c WHERE c.id= :userid")
//    List<LoanPost> findLoanPostsByUserIds(@Param("userid") int userid);

}
