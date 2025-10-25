package sims.model;

import java.util.List;

public class EtapeAspiration {
	
	// Attributs
	private Integer id;
	private int numero;
	private String nom;
	private List<String> sousEtapes;
	
	
	// Constructeurs
	public EtapeAspiration(Integer id, int numero, String nom) {
		this.id = id;
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
