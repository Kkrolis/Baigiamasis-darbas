package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class RoomList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roomListId;

    @ManyToOne()
    @JoinColumn(name = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private User userId;

    @ManyToOne()
    @JoinColumn(name = "roomId")
    @JsonIdentityReference(alwaysAsId = true)
    private Room roomId;
}
