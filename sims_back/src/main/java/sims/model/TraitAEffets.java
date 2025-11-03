package sims.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;

@Entity
public class TraitAEffets extends TraitACondition {
	
	// Attributs
	@ElementCollection
    @CollectionTable(
        name = "effet_trait",
        joinColumns = @JoinColumn (name = "trait_id")
    )
	private List<String> effets = new ArrayList<String>();

	
	// Constructeurs
	public TraitAEffets() {}
	
	public TraitAEffets(Integer id, String nom, String description, String img, TypeTrait type,
			CategorieSim categorieSim, String conditionTrait) {
		super(id, nom, description, img, type, categorieSim, conditionTrait);
	}
	
	public TraitAEffets(String nom, String description, String img, TypeTrait type,
			CategorieSim categorieSim, String conditionTrait) {
		super(nom, description, img, type, categorieSim, conditionTrait);
	}


	// Getters et Setters
	public List<String> getEffets() {
		return effets;
	}


	public void setEffets(List<String> effets) {
		this.effets = effets;
	}


	// toString
	@Override
	public String toString() {
		return "TraitAEffets [effets=" + effets + ", conditionTrait=" + conditionTrait + ", id=" + id + ", nom=" + nom
				+ ", description=" + description + ", img=" + img + ", type=" + type.getNom() + ", categorieSim=" + categorieSim
				+ ", dlc=" + dlc.getNom() + "]";
	}
}
