package sims.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="branche_carriere")
public class BrancheCarriere {

    // Attributs
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

    @Column(length = 40, nullable = false, unique = true)
	private String nom;

    @Lob
	@Column(nullable = true, columnDefinition = "TEXT")
	private String description;

    @Column(nullable = true)
	private String img;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "branche_id")
    private List<RangCarriere> rangs = new ArrayList<RangCarriere>();

    // Constructeurs
	public BrancheCarriere() {}

    public BrancheCarriere(Integer id, String nom, String description, String img) {
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.img = img;
    }

    public BrancheCarriere(String nom, String description, String img) {
        this.nom = nom;
        this.description = description;
        this.img = img;
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

    public List<RangCarriere> getRangs() {
        return rangs;
    }

    public void setRangs(List<RangCarriere> rangs) {
        this.rangs = rangs;
    }
}
