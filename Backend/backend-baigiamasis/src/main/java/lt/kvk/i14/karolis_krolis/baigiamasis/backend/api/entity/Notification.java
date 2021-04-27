package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "USER_NOTIFICATIONS")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String status;

    @ManyToOne()
    @JoinColumn(name = "to_id")
    private User to;

    @ManyToOne()
    @JoinColumn(name = "from_id")
    private User from;

    private String timestamp;

    @ManyToOne()
    @JoinColumn(name="loanPostId")
    private LoanPost loanPost;

    private String type;

}
