package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USER")
public class User {
	@Id
	private int id;
	private String userName;
	private String userPassword;
	private String userEmail;
	
}
