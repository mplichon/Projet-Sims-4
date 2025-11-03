package sims.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="aspiration")
public class Aspiration {
	
	// Attributs
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 25, nullable = false, unique = true)
	private String nom;
	
	@Column(nullable = true)
	private String description;
	
	@Column(nullable = true)
	private String img;
	
	@Enumerated(EnumType.STRING)
	private TypeAspiration type;
	
	@ManyToOne
	@JoinColumn(name = "dlc_id")
	private DLC dlc;
	
	@OneToOne
	@JoinColumn(name = "trait_id")
	private TraitAspiration trait;
	
	@OneToMany
	@JoinColumn(name = "aspiration_id")
	private List<EtapeAspiration> etapes = new ArrayList<EtapeAspiration>();

	
	// Constructeurs
	public Aspiration() {}
	
	public Aspiration(Integer id, String nom, String description, String img, TypeAspiration type) {
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.type = type;
	}
	
	public Aspiration(String nom, String description, String img, TypeAspiration type) {
		this.nom = nom;
		this.description = description;
		this.img = img;
		this.type = type;
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


	public TypeAspiration getType() {
		return type;
	}


	public void setType(TypeAspiration type) {
		this.type = type;
	}


	public DLC getDlc() {
		return dlc;
	}


	public void setDlc(DLC dlc) {
		this.dlc = dlc;
	}


	public TraitAspiration getTrait() {
		return trait;
	}


	public void setTrait(TraitAspiration trait) {
		this.trait = trait;
	}


	public List<EtapeAspiration> getEtapes() {
		return etapes;
	}


	public void setEtapes(List<EtapeAspiration> etapes) {
		this.etapes = etapes;
	}

	
	// toString
	@Override
	public String toString() {
		return "Aspiration [id=" + id + ", nom=" + nom + ", description=" + description + ", img=" + img + ", type="
				+ type.getNom() + ", dlc=" + dlc.getNom() + ", trait=" + trait.getNom() + ", etapes=" + etapes + "]";
	}
}
