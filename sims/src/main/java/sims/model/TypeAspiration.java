package sims.model;

public enum TypeAspiration {
	AMOUR("Amour", null),
	CONNAISSANCE("Connaissance", null),
	CREATIVITE("Créativité", null),
	DEVIANCE("Déviance", null),
	FAMILLE("Famille", null),
	FORTUNE("Fortune", null),
	NATURE("Nature", null),
	NOURRITURE("Nourriture", null),
	POPULARITE("Popularité", null),
	LIEU("Lieu", null),
	ANIMAL("Animal", null),
	BIEN_ETRE("Bien-être", null),
	STAR_WARS("Star Wars", null),
	LYCANTHROPIE("Lycanthropie", null),
	FEE("Fée", null),
	
	ADO("Ado", null),
	
	CREATIVITE_ENFANT("Créativité", null),
	FACULTES_MENTALES("Facultés mentales", null),
	FACULTES_MOTRICES("Facultés motrices", null),
	FACULTES_SOCIALES("Facultés sociales", null),
	POLYVALENCE("Polyvalence", null);
	
	// Attributs
	private final String nom;
	private final String img;
	
	
	// Constructeurs
	private TypeAspiration(String nom, String img) {
		this.nom = nom;
		this.img = img;
	}


	// Getters
	public String getNom() {
		return nom;
	}


	public String getImg() {
		return img;
	}
}
