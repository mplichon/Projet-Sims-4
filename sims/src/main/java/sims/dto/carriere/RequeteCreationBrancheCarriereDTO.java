package sims.dto.carriere;

import java.util.List;

public class RequeteCreationBrancheCarriereDTO {

    // Attributs
	private String nom;
	private String description;
	private String img;
    private List<RequeteCreationRangCarriereDTO> rangs;

    // Constructeurs
    public RequeteCreationBrancheCarriereDTO() {
    }

    // Getters et Setters
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

    public List<RequeteCreationRangCarriereDTO> getRangs() {
        return rangs;
    }

    public void setRangs(List<RequeteCreationRangCarriereDTO> rangs) {
        this.rangs = rangs;
    }
}
