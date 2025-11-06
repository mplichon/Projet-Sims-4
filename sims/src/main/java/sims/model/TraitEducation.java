package sims.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class TraitEducation extends TraitDeCaractere {
	
	// Attributs
	@Column(length = 20, nullable = false)
	private String qualite;

	
	// Constructeurs
	public TraitEducation() {}
	
	public TraitEducation(Integer id, String nom, String description, String img, String qualite) {
		super(id, nom, description, img, TypeTrait.EDUCATION, CategorieSim.ADULTE);
		this.qualite = qualite;
	}
	
	public TraitEducation(String nom, String description, String img, String qualite) {
		super(nom, description, img, TypeTrait.EDUCATION, CategorieSim.ADULTE);
		this.qualite = qualite;
	}


	// Getters et Setters
	public String getQualite() {
		return qualite;
	}


	public void setQualite(String qualite) {
		this.qualite = qualite;
	}


	// toString
	@Override
	public String toString() {
		return "TraitEducation [qualite=" + qualite + ", id=" + id + ", nom=" + nom + ", description=" + description
				+ ", img=" + img + ", type=" + type.getNom() + ", categorieSim=" + categorieSim + ", dlc=" + dlc.getNom() + "]";
	}
}
