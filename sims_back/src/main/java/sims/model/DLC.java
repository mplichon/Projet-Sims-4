package sims.model;

import java.time.LocalDate;

public class DLC {
	
	// Attributs
	private Integer id;
	private String nom;
	private LocalDate dateSortie;
	private String description;
	private String img;
	private TypeDLC type;
	
	
	// Constructeurs
	public DLC(Integer id, String nom, LocalDate dateSortie, String description, String img, TypeDLC type) {
		this.id = id;
		this.nom = nom;
		this.dateSortie = dateSortie;
		this.description = description;
		this.img = img;
		this.type = type;
	}


	// Getters et Setters
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public LocalDate getDateSortie() {
		return dateSortie;
	}


	public void setDateSortie(LocalDate dateSortie) {
		this.dateSortie = dateSortie;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getImg() {
		return img;
	}


	public void setImg(String img) {
		this.img = img;
	}


	public TypeDLC getType() {
		return type;
	}


	public void setType(TypeDLC type) {
		this.type = type;
	}


	// toString
	@Override
	public String toString() {
		return "DLC [nom=" + nom + ", dateSortie=" + dateSortie + ", description=" + description + ", img=" + img
				+ ", typeDLC=" + type.getNom() + "]";
	}
}
