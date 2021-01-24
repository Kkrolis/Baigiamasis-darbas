package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.AuthRequest;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.User;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.repository.UserRepository;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.util.JwtUtil;

@RestController
public class WelcomeController {
	
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UserRepository repository;

	@GetMapping("/")
	public String welcome(@RequestHeader("Authorization") String header) {
		return "Welcome " + jwtUtil.filterUserName(header);
	}
	
	@GetMapping("/joke")
	public String joke(@RequestHeader("Authorization") String header) {
		
		return "This is a joke " + jwtUtil.filterUserName(header);
	}
	
	@PostMapping("/auth")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
		authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getUserPassword()));
		} catch (Exception e) {
			throw new Exception("Invalid username or password");
		}
		return jwtUtil.generateToken(authRequest.getUserName());
	}
	
	@GetMapping("/fetchAllUsers")
	public List<User> fetchAll(){
		return repository.findAll();
	}
	
}
