package sims.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class TraitACondition extends TraitDeCaractere {
	
	// Attributs
	@Column(length = 50, nullable = false)
	protected String conditionTrait;

	
	// Constructeurs
	public TraitACondition() {}

	
	public TraitACondition(Integer id, String nom, String description, String img, TypeTrait type,
			CategorieSim categorieSim, String conditionTrait) {
		super(id, nom, description, img, type, categorieSim);
		this.conditionTrait = conditionTrait;
	}
	
	public TraitACondition(String nom, String description, String img, TypeTrait type,
			CategorieSim categorieSim, String conditionTrait) {
		super(nom, description, img, type, categorieSim);
		this.conditionTrait = conditionTrait;
	}



	// Getters et Setters
	public String getConditionTrait() {
		return conditionTrait;
	}


	public void setConditionTrait(String conditionTrait) {
		this.conditionTrait = conditionTrait;
	}


	// toString
	@Override
	public String toString() {
		return "TraitACondition [condition=" + conditionTrait + ", id=" + id + ", nom=" + nom + ", description="
				+ description + ", img=" + img + ", type=" + type.getNom() + ", categorieSim=" + categorieSim + ", dlc=" + dlc.getNom()
				+ "]";
	}
}
