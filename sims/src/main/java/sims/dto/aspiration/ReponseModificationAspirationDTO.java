package sims.dto.aspiration;

import java.util.List;

import sims.dto.dlc.DlcLegerDTO;
import sims.dto.trait.TraitLegerDTO;

public class ReponseModificationAspirationDTO {

    // Attributs
    private Integer id;
	private String nom;
	private String description;
	private String img;
	private TypeAspirationDTO type;
	private DlcLegerDTO dlc;
	private TraitLegerDTO trait;
	private List<ReponseModificationEtapeAspirationDTO> etapes;

    // Constructeurs
    public ReponseModificationAspirationDTO() {
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

    public TraitLegerDTO getTrait() {
        return trait;
    }

    public void setTrait(TraitLegerDTO trait) {
        this.trait = trait;
    }

    public List<ReponseModificationEtapeAspirationDTO> getEtapes() {
        return etapes;
    }

    public void setEtapes(List<ReponseModificationEtapeAspirationDTO> etapes) {
        this.etapes = etapes;
    }
}
