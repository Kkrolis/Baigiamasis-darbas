package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
	private String message;
	private String fromUser;
}
