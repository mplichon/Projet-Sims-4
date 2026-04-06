package sims.dto.aspiration;

import java.util.List;

public class RequeteCreationEtapeAspirationDTO {

    // Attributs
	private int numero;
	private String nom;
	private List<String> sousEtapes;
    
    // Constructeurs
    public RequeteCreationEtapeAspirationDTO() {
    }

    // Getters et Setters
    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<String> getSousEtapes() {
        return sousEtapes;
    }

    public void setSousEtapes(List<String> sousEtapes) {
        this.sousEtapes = sousEtapes;
    }
}
