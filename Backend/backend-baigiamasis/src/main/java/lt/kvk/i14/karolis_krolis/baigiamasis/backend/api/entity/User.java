package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "bd_users", uniqueConstraints=@UniqueConstraint(columnNames={"userName"}))
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String userName;
	private String firstName;
	private String lastName;
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private String userPassword;

	private String userEmail;
	private int creditScore;
	private String creditGroup;

	@OneToMany(mappedBy = "to")
	@JsonIgnoreProperties({"to", "from", "loanPost"})
	private List<Notification> notifications;

	@OneToMany(mappedBy = "userId")
	@JsonIgnoreProperties({"userId"})
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private List<RoomList> roomList;

}
