package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity.AuthRequest;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.util.JwtUtil;

@RestController()
@RequestMapping("/api")
public class WelcomeController {
	
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;

	@GetMapping("/userName")
	public String welcome(@RequestHeader("Authorization") String header) {
		return jwtUtil.filterUserName(header);
	}
	
	@GetMapping("/joke")
	public String joke() {
		
		return "This is a joke ";
	}
	
	@PostMapping("/auth")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
		authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getUserPassword()));
		} catch (Exception e) {
			System.out.println("Invalid username or password");
			return "Invalid username or password";
			//throw new Exception("Invalid username or password");
		}
		return jwtUtil.generateToken(authRequest.getUserName());
	}

//	@PostMapping("/isExpired")
//	public Boolean checkIfTokenIsExpired(@RequestBody String header) {
//		System.out.println("this is working");
//		return jwtUtil.isTokenExpired(jwtUtil.extracktToken(header));
//	}
	
}
