package sims.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class TraitBoutique extends TraitDeCaractere {

	// Attributs
	@Column(nullable = false, columnDefinition = "INT(6)")
	private int cout;

	
	// Constructeurs
	public TraitBoutique() {}
	
	public TraitBoutique(Integer id, String nom, String description, String img,
			CategorieSim categorieSim, int cout) {
		super(id, nom, description, img, TypeTrait.BOUTIQUE, categorieSim);
		this.cout = cout;
	}
	
	public TraitBoutique(String nom, String description, String img,
			CategorieSim categorieSim, int cout) {
		super(nom, description, img, TypeTrait.BOUTIQUE, categorieSim);
		this.cout = cout;
	}


	// Getters et Setters
	public int getCout() {
		return cout;
	}


	public void setCout(int cout) {
		this.cout = cout;
	}


	// toString
	@Override
	public String toString() {
		return "TraitBoutique [cout=" + cout + ", id=" + id + ", nom=" + nom + ", description=" + description + ", img="
				+ img + ", type=" + type.getNom() + ", categorieSim=" + categorieSim + ", dlc=" + dlc.getNom() + "]";
	}
}
