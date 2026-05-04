package sims.dto.carriere;

import java.util.List;

public class RequeteModificationRangCarriereDTO {

    // Attributs
    private Integer id;
	private int numero;
	private String titre;
	private int salaire;
	private String tacheDuJour;
	private List<String> exigencesPourPromotion;

    // Constructeurs
    public RequeteModificationRangCarriereDTO() {
    }

    // Getters et Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public int getSalaire() {
        return salaire;
    }

    public void setSalaire(int salaire) {
        this.salaire = salaire;
    }

    public String getTacheDuJour() {
        return tacheDuJour;
    }

    public void setTacheDuJour(String tacheDuJour) {
        this.tacheDuJour = tacheDuJour;
    }

    public List<String> getExigencesPourPromotion() {
        return exigencesPourPromotion;
    }

    public void setExigencesPourPromotion(List<String> exigencesPourPromotion) {
        this.exigencesPourPromotion = exigencesPourPromotion;
    }
}
