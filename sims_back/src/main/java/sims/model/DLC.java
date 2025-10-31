package sims.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="dlc")
public class DLC {
	
	// Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 25, nullable = false, unique = true)
	private String nom;
	
	@Column(nullable = false)
	private LocalDate dateSortie;
	
	@Column(nullable = true)
	private String description;
	
	@Column(nullable = true)
	private String img;
	
	@Enumerated(EnumType.STRING)
	private TypeDLC type;
	
	
	// Constructeurs
	public DLC() {}
	
	public DLC(Integer id, String nom, LocalDate dateSortie, String description, String img, TypeDLC type) {
		this.id = id;
		this.nom = nom;
		this.dateSortie = dateSortie;
		this.description = description;
		this.img = img;
		this.type = type;
	}
	
	public DLC(String nom, LocalDate dateSortie, String description, String img, TypeDLC type) {
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
		return "DLC [id=" + id + ", nom=" + nom + ", dateSortie=" + dateSortie + ", description=" + description + ", img=" + img
				+ ", typeDLC=" + type.getNom() + "]";
	}
}
