package sims.model;

public enum TypeCarriere {
	INACTIVE("Carrière inactive"),
	ACTIVE("Carrière active"),
	SEMI_ACTIVE("Carrière semi-active"),
	MI_TEMPS("Carrière à mi-temps"),
	EXTRASCOLAIRE("Activité extrascolaire"),
	CLUB("Club de l'université"),
	INDEPENDANT("Indépendant");
	
	
	// Attributs
	private final String nom;
	
	
	// Constructeurs
	private TypeCarriere(String nom) {
		this.nom = nom;
	}
	
	
	// Getters
	public String getNom() {
		return nom;
	}
}
