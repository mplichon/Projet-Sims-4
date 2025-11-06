package sims.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.OrderBy;
import jakarta.persistence.Table;

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
	@OrderBy("numero ASC")
	@JoinColumn(name = "aspiration_id")
	private Set<EtapeAspiration> etapes = new HashSet<EtapeAspiration>();

	
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


	public Set<EtapeAspiration> getEtapes() {
		return etapes;
	}


	public void setEtapes(Set<EtapeAspiration> etapes) {
		this.etapes = etapes;
	}

	
	// toString
	@Override
	public String toString() {
		return "Aspiration [id=" + id + ", nom=" + nom + ", description=" + description + ", img=" + img + ", type="
				+ type.getNom() + ", dlc=" + dlc.getNom() + ", trait=" + trait.getNom() + ", etapes=" + etapes + "]";
	}
}
