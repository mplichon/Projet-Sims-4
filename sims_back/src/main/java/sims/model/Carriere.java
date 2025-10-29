package sims.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="carriere")
public class Carriere {
	
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
	
	@Column(length = 25, nullable = true, unique = true)
	private String nomCarriereGenerale;
	
	@Enumerated(EnumType.STRING)
	private TypeCarriere type;
	
	@ManyToOne
	@JoinColumn(name = "dlc_id")
	private DLC dlc;
	
	@OneToMany
	@JoinColumn(name = "carriere_id")
	private List<RangCarriere> rangs;
	
	
	// Constructeurs
	public Carriere() {}
	
	public Carriere(Integer id, String nom, String description, String img, String nomCarriereGenerale, TypeCarriere type) {
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.nomCarriereGenerale = nomCarriereGenerale;
		this.type = type;
	}
	
	public Carriere(String nom, String description, String img, String nomCarriereGenerale, TypeCarriere type) {
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.nomCarriereGenerale = nomCarriereGenerale;
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


	public String getNomCarriereGenerale() {
		return nomCarriereGenerale;
	}


	public void setNomCarriereGenerale(String nomCarriereGenerale) {
		this.nomCarriereGenerale = nomCarriereGenerale;
	}


	public TypeCarriere getType() {
		return type;
	}


	public void setType(TypeCarriere type) {
		this.type = type;
	}


	public DLC getDlc() {
		return dlc;
	}


	public void setDlc(DLC dlc) {
		this.dlc = dlc;
	}


	public List<RangCarriere> getRangs() {
		return rangs;
	}


	public void setRangs(List<RangCarriere> rangs) {
		this.rangs = rangs;
	}


	// toString
	@Override
	public String toString() {
		return "Carriere [id=" + id + ", nom=" + nom + ", description=" + description + ", img=" + img
				+ ", nomCarriereGenerale=" + nomCarriereGenerale + ", type=" + type.getNom() + ", dlc=" + dlc.getNom() + ", rangs="
				+ rangs + "]";
	}
	
	
}
