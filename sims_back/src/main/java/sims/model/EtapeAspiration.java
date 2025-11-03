package sims.model;

import java.util.ArrayList;
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
@Table(name="etape_aspiration")
public class EtapeAspiration {
	
	// Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(nullable = false, columnDefinition = "INT(2)")
	private int numero;
	
	@Column(length = 25, nullable = false, unique = true)
	private String nom;
	
	@ElementCollection
    @CollectionTable(
        name = "sous_etape_aspiration",
        joinColumns = @JoinColumn (name = "etape_aspiration_id")
    )
    @Column(name = "sous_etape")
	private List<String> sousEtapes = new ArrayList<String>();
	
	
	// Constructeurs
	public EtapeAspiration() {}
	
	public EtapeAspiration(Integer id, int numero, String nom) {
		this.id = id;
		this.numero = numero;
		this.nom = nom;
	}
	
	public EtapeAspiration(int numero, String nom) {
		this.numero = numero;
		this.nom = nom;
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


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public List<String> getSousEtapes() {
		return sousEtapes;
	}


	public void setSousEtapes(List<String> sousEtapes) {
		this.sousEtapes = sousEtapes;
	}


	// toString
	@Override
	public String toString() {
		return "EtapeAspiration [id=" + id + ", numero=" + numero + ", nom=" + nom + ", sousEtapes=" + sousEtapes + "]";
	}
}
