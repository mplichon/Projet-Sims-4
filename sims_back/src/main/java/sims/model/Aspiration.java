package sims.model;

import java.util.List;

public class Aspiration {
	
	// Attributs
	private Integer id;
	private String nom;
	private String description;
	private String img;
	private TypeAspiration type;
	private DLC dlc;
	private TraitAspiration trait;
	private List<EtapeAspiration> etapes;

	
	// Constructeurs
	public Aspiration(Integer id, String nom, String description, String img, TypeAspiration type) {
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.type = type;
	}


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


	public TypeAspiration getType() {
		return type;
	}


	public void setType(TypeAspiration type) {
		this.type = type;
	}


	public DLC getDlc() {
		return dlc;
	}


	public void setDlc(DLC dlc) {
		this.dlc = dlc;
	}


	public TraitAspiration getTrait() {
		return trait;
	}


	public void setTrait(TraitAspiration trait) {
		this.trait = trait;
	}


	public List<EtapeAspiration> getEtapes() {
		return etapes;
	}


	public void setEtapes(List<EtapeAspiration> etapes) {
		this.etapes = etapes;
	}

	
	// toString
	@Override
	public String toString() {
		return "Aspiration [id=" + id + ", nom=" + nom + ", description=" + description + ", img=" + img + ", type="
				+ type.getNom() + ", dlc=" + dlc.getNom() + ", trait=" + trait.getNom() + ", etapes=" + etapes + "]";
	}
}
