package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    Notification findById(int id);
}
