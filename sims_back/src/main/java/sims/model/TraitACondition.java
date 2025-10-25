package sims.model;

public class TraitACondition extends TraitDeCaractere {
	
	// Attributs
	protected String condition;

	
	// Constructeurs
	public TraitACondition(Integer id, String nom, String description, String img, TypeTrait type,
			CategorieSim categorieSim, String condition) {
		super(id, nom, description, img, type, categorieSim);
		this.condition = condition;
	}


	// Getters et Setters
	public String getCondition() {
		return condition;
	}


	public void setCondition(String condition) {
		this.condition = condition;
	}


	// toString
	@Override
	public String toString() {
		return "TraitACondition [condition=" + condition + ", id=" + id + ", nom=" + nom + ", description="
				+ description + ", img=" + img + ", type=" + type.getNom() + ", categorieSim=" + categorieSim + ", dlc=" + dlc.getNom()
				+ "]";
	}
}
