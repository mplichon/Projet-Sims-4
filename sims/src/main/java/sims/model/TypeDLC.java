package sims.model;

public enum TypeDLC {
	BASE("Jeu de base", "#bdbdbd"),
	EXTENSION("Pack d'extension", "#26BEBD"),
	JEU("Pack de jeu", "#136CFC"),
	OBJETS("Kit d'objets", "#3CB937"),
	MINIKIT("Kit", "#8C419A");
	
	
	// Attributs
	private final String nom;
	private final String couleur;
	
	
	// Constructeurs
	private TypeDLC(String nom, String couleur) {
		this.nom = nom;
		this.couleur = couleur;
	}

	
	// Getters
	public String getNom() {
		return nom;
	}

	public String getCouleur() {
		return couleur;
	}
}
