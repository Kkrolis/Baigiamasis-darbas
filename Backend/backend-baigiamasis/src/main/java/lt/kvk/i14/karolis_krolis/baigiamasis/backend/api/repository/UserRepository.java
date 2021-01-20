package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByUserName(String username);
}
