package sims.dto.dlc;

import java.time.LocalDate;

public class RequeteModificationDlcDTO {

    // Attributs
    private Integer id;
	private String nom;
	private LocalDate dateSortie;
	private String description;
	private String img;
	private TypeDlcDTO type;
    
    // Contructeurs 
    public RequeteModificationDlcDTO() {
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
    public LocalDate getDateSortie() {
        return dateSortie;
    }
    public void setDateSortie(LocalDate dateSortie) {
        this.dateSortie = dateSortie;
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
    public TypeDlcDTO getType() {
        return type;
    }
    public void setType(TypeDlcDTO type) {
        this.type = type;
    }
}
