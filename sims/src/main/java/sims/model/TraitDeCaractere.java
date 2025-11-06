package sims.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class TraitDeCaractere {
	
	// Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;
	
	@Column(length = 25, nullable = false)
	protected String nom;
	
	@Column(nullable = true)
	protected String description;
	
	@Column(nullable = true)
	protected String img;
	
	@Enumerated(EnumType.STRING)
	protected TypeTrait type;
	
	@Enumerated(EnumType.STRING)
	protected CategorieSim categorieSim;
	
	@ManyToOne
	@JoinColumn(name = "dlc_id")
	protected DLC dlc;
	
	
	// Constructeurs
	public TraitDeCaractere() {}
	
	public TraitDeCaractere(Integer id, String nom, String description, String img, TypeTrait type, CategorieSim categorieSim) {
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.type = type;
		this.categorieSim = categorieSim;
	}
	
	public TraitDeCaractere(String nom, String description, String img, TypeTrait type, CategorieSim categorieSim) {
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.type = type;
		this.categorieSim = categorieSim;
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


	public TypeTrait getType() {
		return type;
	}


	public void setType(TypeTrait type) {
		this.type = type;
	}


	public CategorieSim getCategorieSim() {
		return categorieSim;
	}


	public void setCategorieSim(CategorieSim categorieSim) {
		this.categorieSim = categorieSim;
	}


	public DLC getDlc() {
		return dlc;
	}


	public void setDlc(DLC dlc) {
		this.dlc = dlc;
	}


	// toString
	@Override
	public String toString() {
		return "TraitDeCaractere [id=" + id + ", nom=" + nom + ", description=" + description + ", img=" + img
				+ ", type=" + type.getNom() + ", categorieSim=" + categorieSim + ", dlc=" + dlc.getNom() + "]";
	}
}
