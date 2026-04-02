package sims.dto.trait;

import sims.dto.CategorieSimDTO;
import sims.dto.dlc.DlcLegerDTO;

public class ReponseListeGestionTraitDTO {

    // Attributs
    private Integer id;
	private String nom;
	private String description;
	private String img;
	private TypeTraitDTO type;
	private CategorieSimDTO categorieSim;
	private DlcLegerDTO dlc;

    // Contructeurs
    public ReponseListeGestionTraitDTO() {
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

    public TypeTraitDTO getType() {
        return type;
    }

    public void setType(TypeTraitDTO type) {
        this.type = type;
    }

    public CategorieSimDTO getCategorieSim() {
        return categorieSim;
    }

    public void setCategorieSim(CategorieSimDTO categorieSim) {
        this.categorieSim = categorieSim;
    }

    public DlcLegerDTO getDlc() {
        return dlc;
    }

    public void setDlc(DlcLegerDTO dlc) {
        this.dlc = dlc;
    }
}
