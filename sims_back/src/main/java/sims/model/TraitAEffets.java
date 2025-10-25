package sims.model;

import java.util.List;

public class TraitAEffets extends TraitACondition {
	
	// Attributs
	private List<String> effets;

	
	// Constructeurs
	public TraitAEffets(Integer id, String nom, String description, String img, TypeTrait type,
			CategorieSim categorieSim, String condition) {
		super(id, nom, description, img, type, categorieSim, condition);
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
		return "TraitAEffets [effets=" + effets + ", condition=" + condition + ", id=" + id + ", nom=" + nom
				+ ", description=" + description + ", img=" + img + ", type=" + type.getNom() + ", categorieSim=" + categorieSim
				+ ", dlc=" + dlc.getNom() + "]";
	}
}
