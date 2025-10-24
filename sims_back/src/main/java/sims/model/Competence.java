package sims.model;

public class Competence {
	
	// Attributs
	private Integer id;
	private String nom;
	private String description;
	private String img;
	private int niveauMax;
	private CategorieSim categorieSim;
	private DLC dlc;
	
	
	// Constructeurs
	public Competence(Integer id, String nom, String description, String img, int niveauMax, CategorieSim categorieSim, DLC dlc) {
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.niveauMax = niveauMax;
		this.categorieSim = categorieSim;
		this.dlc = dlc;
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
