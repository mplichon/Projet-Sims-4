package sims.model;

public class TraitEducation extends TraitDeCaractere {
	
	// Attributs
	private String qualite;

	
	// Constructeurs
	public TraitEducation(Integer id, String nom, String description, String img, String qualite) {
		super(id, nom, description, img, TypeTrait.EDUCATION, CategorieSim.ADULTE);
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
