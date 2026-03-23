package sims.dto.dlc;

public class TypeDlcDTO {

    // Attributs
    private String code;
    private String nom;
    private String couleur;

    // Constructeurs
    public TypeDlcDTO() {
    }

    // Getters et Setters
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public String getCouleur() {
        return couleur;
    }
    public void setCouleur(String couleur) {
        this.couleur = couleur;
    }
}
