package sims.dto.carriere;

import java.util.List;

public class ReponseModificationBrancheCarriereDTO {

    // Attributs
    private Integer id;
	private String nom;
	private String description;
	private String img;
    private List<ReponseModificationRangCarriereDTO> rangs;

    // Constructeurs
    public ReponseModificationBrancheCarriereDTO() {
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

    public List<ReponseModificationRangCarriereDTO> getRangs() {
        return rangs;
    }

    public void setRangs(List<ReponseModificationRangCarriereDTO> rangs) {
        this.rangs = rangs;
    }
}
