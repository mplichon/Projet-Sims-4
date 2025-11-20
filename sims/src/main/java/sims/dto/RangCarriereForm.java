package sims.dto;

import java.util.ArrayList;
import java.util.List;

public class RangCarriereForm {

    // Attributs
    private int numero;
	private String titre;
	private int salaire;
	private String tacheDuJour;
	private List<String> exigencesPourPromotion = new ArrayList<String>();


    // Getters et Setters
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
