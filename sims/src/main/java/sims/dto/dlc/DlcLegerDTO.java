package sims.dto.dlc;

public class DlcLegerDTO {
    
    // Attributs
    private Integer id;
    private String nom;
    private String img;

    // Contructeurs 
    public DlcLegerDTO() {
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
