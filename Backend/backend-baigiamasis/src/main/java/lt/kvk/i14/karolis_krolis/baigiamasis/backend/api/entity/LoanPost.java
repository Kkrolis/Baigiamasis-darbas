package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "LOANPOST")
public class LoanPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loanPostId;
    private BigDecimal ammount;
    private String reason;
    private String timestamp;
    private String intrest;
    private int duration;

    @ManyToOne
    @JoinColumn(name="id")
    private User user;
}
