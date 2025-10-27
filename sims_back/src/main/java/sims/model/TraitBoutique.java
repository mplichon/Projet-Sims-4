package sims.model;

public class TraitBoutique extends TraitDeCaractere {

	// Attributs
	private int cout;

	
	// Constructeurs
	public TraitBoutique(Integer id, String nom, String description, String img,
			CategorieSim categorieSim, int cout) {
		super(id, nom, description, img, TypeTrait.BOUTIQUE, categorieSim);
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
