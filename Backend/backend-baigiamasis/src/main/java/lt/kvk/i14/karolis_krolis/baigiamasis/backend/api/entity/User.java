package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USER")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String userName;
	private String firstName;
	private String lastName;
	private String userPassword;
	private String userEmail;

//	@OneToMany(mappedBy = "user")
//	private List<LoanPost> loanPosts;
	
}
