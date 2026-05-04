package sims.dto.carriere;

import java.util.List;

import sims.dto.dlc.DlcLegerDTO;

public class ReponseGestionCarriereDTO {

    // Attributs
    private Integer id;
	private String nom;
	private String description;
	private String img;
	private TypeCarriereDTO type;
	private DlcLegerDTO dlc;
    private List<ReponseGestionRangCarriereDTO> rangs;
	private List<ReponseGestionBrancheCarriereDTO> branches;

    // Constructeurs
    public ReponseGestionCarriereDTO() {
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

    public TypeCarriereDTO getType() {
        return type;
    }

    public void setType(TypeCarriereDTO type) {
        this.type = type;
    }

    public DlcLegerDTO getDlc() {
        return dlc;
    }

    public void setDlc(DlcLegerDTO dlc) {
        this.dlc = dlc;
    }

    public List<ReponseGestionRangCarriereDTO> getRangs() {
        return rangs;
    }

    public void setRangs(List<ReponseGestionRangCarriereDTO> rangs) {
        this.rangs = rangs;
    }

    public List<ReponseGestionBrancheCarriereDTO> getBranches() {
        return branches;
    }

    public void setBranches(List<ReponseGestionBrancheCarriereDTO> branches) {
        this.branches = branches;
    }
}
