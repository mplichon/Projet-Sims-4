package sims.dto.trait;

import java.util.List;

import sims.dto.CategorieSimDTO;
import sims.dto.aspiration.AspirationLegerDTO;
import sims.dto.aspiration.TypeAspirationDTO;
import sims.dto.dlc.DlcLegerDTO;

public class ReponseCreationTraitDTO {

    // Attributs
    private Integer id;
	private String nom;
	private String description;
	private String img;
	private TypeTraitDTO type;
	private CategorieSimDTO categorieSim;
	private DlcLegerDTO dlc;

    private Integer cout;
    private String qualite;
    private String condition;
    private List<String> effets;
    private TypeAspirationDTO typeAspiration;
    private AspirationLegerDTO aspiration;

    // Contructeurs
    public ReponseCreationTraitDTO() {
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

    public Integer getCout() {
        return cout;
    }

    public void setCout(Integer cout) {
        this.cout = cout;
    }

    public String getQualite() {
        return qualite;
    }

    public void setQualite(String qualite) {
        this.qualite = qualite;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public List<String> getEffets() {
        return effets;
    }

    public void setEffets(List<String> effets) {
        this.effets = effets;
    }

    public TypeAspirationDTO getTypeAspiration() {
        return typeAspiration;
    }

    public void setTypeAspiration(TypeAspirationDTO typeAspiration) {
        this.typeAspiration = typeAspiration;
    }

    public AspirationLegerDTO getAspiration() {
        return aspiration;
    }

    public void setAspiration(AspirationLegerDTO aspiration) {
        this.aspiration = aspiration;
    }
}
