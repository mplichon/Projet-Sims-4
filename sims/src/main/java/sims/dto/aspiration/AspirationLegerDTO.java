package sims.dto.aspiration;

public class AspirationLegerDTO {

    // Attributs
	private Integer id;
	private String nom;
    private String img;
    
    // Constructeurs
    public AspirationLegerDTO() {
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
