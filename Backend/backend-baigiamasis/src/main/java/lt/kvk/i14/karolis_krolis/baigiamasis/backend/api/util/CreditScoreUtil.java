package lt.kvk.i14.karolis_krolis.baigiamasis.backend.api.util;

public class CreditScoreUtil {
    public String setCreditGroupe(int score){
        String group = "";
        if (score <= 20) { group = "E";}
        else if (score <= 40) { group = "D";}
        else if (score <= 60) { group = "C";}
        else if (score <= 80) { group = "B";}
        else if (score <= 100) { group = "A";}

        return group;
    }
}
