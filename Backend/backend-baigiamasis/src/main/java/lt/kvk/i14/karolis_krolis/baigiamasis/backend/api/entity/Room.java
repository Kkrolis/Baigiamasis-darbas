package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.util.EntityIdResolver;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "roomId",
        resolver = EntityIdResolver.class)
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roomId;

    @ManyToOne()
    @JoinColumn(name = "user1_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user1;

    @ManyToOne()
    @JoinColumn(name = "user2_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user2;

    @OneToMany(mappedBy = "roomId")
    @JsonIgnoreProperties({"roomId", "id"})
    private List<RoomList> roomList;

    @OneToMany(mappedBy = "room")
    @JsonIgnoreProperties({"roomId"})
    private List<Message> messages;

}
