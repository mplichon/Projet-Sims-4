package sims.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class TraitAspiration extends TraitDeCaractere {
	
	// Attributs
	@OneToOne
	@JoinColumn(name = "aspiration_id")
	private Aspiration aspiration;

	
	// Constructeurs
	public TraitAspiration() {}
	
	public TraitAspiration(Integer id, String nom, String description, String img, CategorieSim categorieSim) {
		super(id, nom, description, img, TypeTrait.ASPIRATION, categorieSim);
	}
	
	public TraitAspiration(String nom, String description, String img, CategorieSim categorieSim) {
		super(nom, description, img, TypeTrait.ASPIRATION, categorieSim);
	}


	// Getters et Setters
	public Aspiration getAspiration() {
		return aspiration;
	}


	public void setAspiration(Aspiration aspiration) {
		this.aspiration = aspiration;
	}


	// toString
	@Override
	public String toString() {
		return "TraitAspiration [aspiration=" + aspiration.getNom() + ", id=" + id + ", nom=" + nom + ", description="
				+ description + ", img=" + img + ", type=" + type.getNom() + ", categorieSim=" + categorieSim + ", dlc=" + dlc.getNom()
				+ "]";
	}
}
