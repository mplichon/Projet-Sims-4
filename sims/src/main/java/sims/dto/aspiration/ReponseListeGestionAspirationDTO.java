package sims.dto.aspiration;
import sims.dto.dlc.DlcLegerDTO;

public class ReponseListeGestionAspirationDTO {

    // Attributs
    private Integer id;
    private String nom;
	private String description;
	private String img;
	private TypeAspirationDTO type;
    private DlcLegerDTO dlc;

    // Constructeurs
    public ReponseListeGestionAspirationDTO() {
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
    public TypeAspirationDTO getType() {
        return type;
    }
    public void setType(TypeAspirationDTO type) {
        this.type = type;
    }
    public DlcLegerDTO getDlc() {
        return dlc;
    }
    public void setDlc(DlcLegerDTO dlc) {
        this.dlc = dlc;
    }
}
