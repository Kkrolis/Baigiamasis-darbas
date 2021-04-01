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
@Table(name = "LOAN_REASON")
public class LoanReason {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reasonId;
    private String reasonName;
    private int minIntrest;
    private BigDecimal minAmount;
    private BigDecimal maxAmount;
    private int minDuration;
    private int maxDuration;
}
