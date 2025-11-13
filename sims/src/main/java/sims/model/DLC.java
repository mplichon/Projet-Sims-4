package sims.model;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

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
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dateSortie;
	
	@Lob
	@Column(nullable = true, columnDefinition = "TEXT")
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
