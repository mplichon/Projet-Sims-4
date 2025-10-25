package sims.model;

import java.util.List;

public class Carriere {
	
	// Attributs
	private Integer id;
	private String nom;
	private String description;
	private String img;
	private String nomCarriereGenerale;
	private TypeCarriere type;
	private DLC dlc;
	private List<RangCarriere> rangs;
	
	
	// Constructeurs
	public Carriere(Integer id, String nom, String description, String img, String nomCarriereGenerale, TypeCarriere type) {
		this.id = id;
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
