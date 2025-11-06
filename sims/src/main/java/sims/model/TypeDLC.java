package sims.model;

public enum TypeDLC {
	BASE("Jeu de base"),
	EXTENSION("Pack d'extension"),
	JEU("Pack de jeu"),
	OBJETS("Kit d'objets"),
	MINIKIT("Kit");
	
	
	// Attributs
	private final String nom;
	
	
	// Constructeurs
	private TypeDLC(String nom) {
		this.nom = nom;
	}

	
	// Getters
	public String getNom() {
		return nom;
	}
}
