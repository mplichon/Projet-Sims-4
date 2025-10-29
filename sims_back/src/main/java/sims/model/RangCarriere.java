package sims.model;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="rang_carriere")
public class RangCarriere {
	
	// Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable = false, columnDefinition = "INT(2)")
	private int numero;
	
	@Column(length = 25, nullable = false)
	private String titre;
	
	@Column(nullable = false, columnDefinition = "INT(5)")
	private int salaire;
	
	@Column(length = 50, nullable = true)
	private String tacheDuJour;
	
	@ElementCollection
    @CollectionTable(
        name = "exigence_promotion",
        joinColumns = @JoinColumn (name = "rang_carriere_id")
    )
    @Column(name = "exigence")
	private List<String> exigencesPourPromotion;
	
	
	// Constructeurs
	public RangCarriere() {}
	
	public RangCarriere(Integer id, int numero, String titre, int salaire, String tacheDuJour) {
		this.id = id;
		this.numero = numero;
		this.titre = titre;
		this.salaire = salaire;
		this.tacheDuJour = tacheDuJour;
	}

	public RangCarriere(int numero, String titre, int salaire, String tacheDuJour) {
		this.numero = numero;
		this.titre = titre;
		this.salaire = salaire;
		this.tacheDuJour = tacheDuJour;
	}

	// Getters et Setters
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public int getNumero() {
		return numero;
	}


	public void setNumero(int numero) {
		this.numero = numero;
	}


	public String getTitre() {
		return titre;
	}


	public void setTitre(String titre) {
		this.titre = titre;
	}


	public int getSalaire() {
		return salaire;
	}


	public void setSalaire(int salaire) {
		this.salaire = salaire;
	}


	public String getTacheDuJour() {
		return tacheDuJour;
	}


	public void setTacheDuJour(String tacheDuJour) {
		this.tacheDuJour = tacheDuJour;
	}


	public List<String> getExigencesPourPromotion() {
		return exigencesPourPromotion;
	}


	public void setExigencesPourPromotion(List<String> exigencesPourPromotion) {
		this.exigencesPourPromotion = exigencesPourPromotion;
	}


	// toString
	@Override
	public String toString() {
		return "RangCarriere [id=" + id + ", numero=" + numero + ", titre=" + titre + ", salaire=" + salaire
				+ ", tacheDuJour=" + tacheDuJour + ", exigencesPourPromotion=" + exigencesPourPromotion + "]";
	}
}
