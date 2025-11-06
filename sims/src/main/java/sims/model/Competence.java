package sims.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="competence")
public class Competence {
	
	// Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 25, nullable = false, unique = true)
	private String nom;
	
	@Column(nullable = true)
	private String description;
	
	@Column(nullable = true)
	private String img;
	
	@Column(nullable = false, columnDefinition = "INT(2)")
	private int niveauMax;
	
	@Enumerated(EnumType.STRING)
	private CategorieSim categorieSim;
	
	@ManyToOne
	@JoinColumn(name = "dlc_id")
	private DLC dlc;
	
	
	// Constructeurs
	public Competence() {}
	
	public Competence(Integer id, String nom, String description, String img, int niveauMax, CategorieSim categorieSim) {
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.niveauMax = niveauMax;
		this.categorieSim = categorieSim;
	}
	
	public Competence(String nom, String description, String img, int niveauMax, CategorieSim categorieSim) {
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.niveauMax = niveauMax;
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


	public int getNiveauMax() {
		return niveauMax;
	}


	public void setNiveauMax(int niveauMax) {
		this.niveauMax = niveauMax;
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


	@Override
	public String toString() {
		return "Competence [id=" + id + ", nom=" + nom + ", description=" + description + ", img=" + img
				+ ", niveauMax=" + niveauMax + ", categorieSim=" + categorieSim + ", dlc=" + dlc.getNom() + "]";
	}
}
