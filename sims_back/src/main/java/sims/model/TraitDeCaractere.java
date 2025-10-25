package sims.model;

public class TraitDeCaractere {
	
	// Attributs
	protected Integer id;
	protected String nom;
	protected String description;
	protected String img;
	protected TypeTrait type;
	protected CategorieSim categorieSim;
	protected DLC dlc;
	
	
	// Constructeurs
	public TraitDeCaractere(Integer id, String nom, String description, String img, TypeTrait type, CategorieSim categorieSim) {
		this.id = id;
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
