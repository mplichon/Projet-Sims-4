package sims.dto;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import sims.model.Carriere;
import sims.model.DLC;
import sims.model.RangCarriere;
import sims.model.TypeCarriere;

public class CarriereForm {

    // Attributs
    private String nom;
    private String description;
    private String img;
    private String nomCarriereGenerale;
    private TypeCarriere type;
    private DLC dlc;
    private List<RangCarriereForm> rangs = new ArrayList<RangCarriereForm>();

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

	public String getNomCarriereGenerale() {
		return nomCarriereGenerale;
	}

	public void setNomCarriereGenerale(String nomCarriereGenerale) {
		this.nomCarriereGenerale = nomCarriereGenerale;
	}

	public TypeCarriere getType() {
		return type;
	}

	public void setType(TypeCarriere type) {
		this.type = type;
	}

	public DLC getDlc() {
		return dlc;
	}

	public void setDlc(DLC dlc) {
		this.dlc = dlc;
	}

	public List<RangCarriereForm> getRangs() {
		return rangs;
	}

	public void setRangs(List<RangCarriereForm> rangs) {
		this.rangs = rangs;
	}

    // Méthodes
    public Carriere convertToCarriere() {
        Carriere carriere = new Carriere();
        carriere.setNom(this.getNom());
        carriere.setDescription(this.getDescription());
        carriere.setImg(this.getImg());
        carriere.setNomCarriereGenerale(this.getNomCarriereGenerale());
        carriere.setType(this.getType());
        carriere.setDlc(this.getDlc());

        for (RangCarriereForm r : this.getRangs()) {
            RangCarriere rang = new RangCarriere(r.getNumero(), r.getTitre(), r.getSalaire(), r.getTacheDuJour());
            rang.setExigencesPourPromotion(new HashSet<String>(r.getExigencesPourPromotion()));
            carriere.getRangs().add(rang);
        }

        return carriere;
    }

}
