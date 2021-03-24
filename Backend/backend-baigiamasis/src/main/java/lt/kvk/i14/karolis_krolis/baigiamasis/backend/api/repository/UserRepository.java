package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.User;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByUserName(String username);

	@Query(value = "SELECT id, user_name FROM user", nativeQuery = true)
	List<Object> getAllUsersOnlyIdAndUserName();

}
