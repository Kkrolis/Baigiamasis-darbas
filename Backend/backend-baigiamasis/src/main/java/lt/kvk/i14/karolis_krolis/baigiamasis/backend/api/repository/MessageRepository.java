package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Integer> {

}
