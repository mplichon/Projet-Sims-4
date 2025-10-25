package sims.model;

public class TraitBonus extends TraitDeCaractere {
	
	// Attributs
	private TypeAspiration typeAspiration;

	
	// Constructeurs
	public TraitBonus(Integer id, String nom, String description, String img,
			CategorieSim categorieSim, TypeAspiration typeAspiration) {
		super(id, nom, description, img, TypeTrait.BONUS, categorieSim);
		this.typeAspiration = typeAspiration;
	}


	// Getters et Setters
	public TypeAspiration getTypeAspiration() {
		return typeAspiration;
	}


	public void setTypeAspiration(TypeAspiration typeAspiration) {
		this.typeAspiration = typeAspiration;
	}


	// toString
	@Override
	public String toString() {
		return "TraitBonus [typeAspiration=" + typeAspiration.getNom() + ", id=" + id + ", nom=" + nom + ", description="
				+ description + ", img=" + img + ", type=" + type.getNom() + ", categorieSim=" + categorieSim + ", dlc=" + dlc.getNom()
				+ "]";
	}
}
