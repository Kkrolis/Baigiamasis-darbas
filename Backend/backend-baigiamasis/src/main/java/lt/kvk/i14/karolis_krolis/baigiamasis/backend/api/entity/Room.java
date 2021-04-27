package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "roomId")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roomId;

    @OneToMany(mappedBy = "roomId")
    @JsonIgnoreProperties({"roomId", "id"})
    private List<RoomList> roomList;



}
