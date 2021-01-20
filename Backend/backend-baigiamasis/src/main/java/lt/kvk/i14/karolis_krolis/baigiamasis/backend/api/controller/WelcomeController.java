package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.AuthRequest;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.util.JwtUtil;

@RestController
public class WelcomeController {
	
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;

	@GetMapping("/")
	public String welcome() {
		return "Welcome to JWT";
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
	
}
