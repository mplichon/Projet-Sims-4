package sims.model;

public enum CategorieSim {
	ADULTE("Adulte"), 
	ADO("Ado"),
	ENFANT("Enfant"),
	BAMBIN("Bambin"),
	NOURRISSON("Nourrisson"),
	CHIEN("Chien"),
	CHAT("Chat"),
	CHEVAL("Cheval");

	// Attributs
	private final String nom;
	
	
	// Constructeurs
	private CategorieSim(String nom) {
		this.nom = nom;
	}

	
	// Getters
	public String getNom() {
		return nom;
	}
}
