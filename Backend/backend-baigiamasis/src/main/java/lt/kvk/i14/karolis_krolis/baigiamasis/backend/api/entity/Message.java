package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int messageId;

	@ManyToOne()
	@JoinColumn(name="id")
	private User sender;

	@ManyToOne()
	@JoinColumn(name="roomId")
	private Room room;

	private String message;
	private String timestamp;
}
