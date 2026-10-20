package sims.model;

public enum TypeTrait {
	BONUS("Trait bonus"),
	ENFANCE("Trait temporaire de l'enfance"),
	ASPIRATION("Trait de récompense d'aspiration"),
	HERITAGE("Trait d'héritage"),
	EDUCATION("Trait lié à l'éducation"),
	NOURRITURE("Trait de récompense de nourriture"),
	MONTAGNE("Trait de récompense d'excursion"),
	MALADIE("Trait de maladie"),
	COMPETENCE("Trait de récompense de compétence"),
	
	BASE("Trait de base"),
	FANTOME("Trait bonus de fantôme"),
	MOMENT_DETERMINANT("Trait bonus d'un moment déterminant"),
	CONFIANCE_EN_SOI("Trait de récompense de confiance en soi"),
	RECOMPENSE_CHEVAL("Trait de récompense de cheval"),
	PHASE_ENFANCE("Trait temporaire d'une phase de l'enfance"),
	BOUTIQUE("Trait de récompense de la boutique"),
	EDUCATION_V2("Trait de récompense lié à l'éducation"),
	HERITAGE_V2("Trait de récompense d'héritage"),
	CHANGEMENT_AGE("Trait de récompense de changement d'âge"),
	LYCEE("Trait de récompense du lycée"),
	CARRIERE("Trait de récompense de carrière"),
	OCCULTE("Trait de récompense d'occulte"),
	RECOMPENSE_DIVERS("Trait de récompense divers"),
	TEMPORAIRE_DIVERS("Trait temporaire divers"),
	ESCAPADE("Trait de récompense d'escapade"),
	STYLE_DE_VIE("Trait temporaire de style de vie"),
	RECOMPENSE_ASPIRATION("Trait de récompense d'aspiration"),
	BONUS_ASPIRATION("Trait bonus d'aspiration");
	
	
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
