package sims.model;

public enum TypeTrait {
	BASE("Trait de base"),
	FANTOME("Trait de fantôme"),
	BONUS("Trait bonus"),
	ENFANCE("Trait temporaire de l'enfance"),
	ASPIRATION("Trait de récompense d'aspiration"),
	HERITAGE("Trait d'héritage"),
	EDUCATION("Trait lié à l'éducation"),
	BOUTIQUE("Trait de récompense de la boutique"),
	CARRIERE("Trait de récompense de carrière"),
	NOURRITURE("Trait de récompense de nourriture"),
	MONTAGNE("Trait de récompense d'excursion"),
	MALADIE("Trait de maladie"),
	COMPETENCE("Trait de récompense de compétence"),
	STYLE_DE_VIE("Trait de style de vie");
	
	
	// Attributs
	private final String nom;
	
	
	// Constructeurs
	private TypeTrait(String nom) {
		this.nom = nom;
	}
	
	
	// Getters
	public String getNom() {
		return nom;
	}
}
