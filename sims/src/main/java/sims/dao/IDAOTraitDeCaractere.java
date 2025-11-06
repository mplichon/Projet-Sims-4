package sims.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sims.model.TraitACondition;
import sims.model.TraitAEffets;
import sims.model.TraitAspiration;
import sims.model.TraitBonus;
import sims.model.TraitBoutique;
import sims.model.TraitDeCaractere;
import sims.model.TraitEducation;

public interface IDAOTraitDeCaractere extends JpaRepository<TraitDeCaractere, Integer>{
	
	// Traits de caractère
	@Query("SELECT DISTINCT t FROM TraitDeCaractere t LEFT JOIN FETCH t.effets")
	public List<TraitDeCaractere> findAll();
	
	// Traits de base
	@Query("SELECT t FROM TraitDeCaractere t WHERE t.type = 'BASE'")
	public List<TraitDeCaractere> findAllTraitBase();
	
	@Query("SELECT t FROM TraitDeCaractere t WHERE t.type='BASE' AND t.id=:id")
	public TraitDeCaractere findTraitBaseById(@Param("id") Integer id);
	
	// Traits de fantôme
	@Query("SELECT t FROM TraitDeCaractere t WHERE t.type = 'FANTOME'")
	public List<TraitDeCaractere> findAllTraitFantome();
	
	@Query("SELECT t FROM TraitDeCaractere t WHERE t.type='FANTOME' AND t.id=:id")
	public TraitDeCaractere findTraitFantomeById(@Param("id") Integer id);
	
	// Traits bonus
	@Query("FROM TraitBonus")
	public List<TraitBonus> findAllTraitBonus();
	
	@Query("SELECT t FROM TraitBonus t WHERE t.id=:id")
	public TraitBonus findTraitBonusById(@Param("id") Integer id);
	
	// Traits temporaires de l'enfance
	@Query("SELECT t FROM TraitDeCaractere t WHERE t.type = 'ENFANCE'")
	public List<TraitDeCaractere> findAllTraitEnfance();
	
	@Query("SELECT t FROM TraitDeCaractere t WHERE t.type='ENFANCE' AND t.id=:id")
	public TraitDeCaractere findTraitEnfanceById(@Param("id") Integer id);
	
	// Traits de récompense d'aspiration
	@Query("FROM TraitAspiration")
	public List<TraitAspiration> findAllTraitAspiration();
	
	@Query("SELECT t FROM TraitAspiration t WHERE t.id=:id")
	public TraitAspiration findTraitAspirationById(@Param("id") Integer id);
	
	// Traits d'héritage
	@Query("SELECT DISTINCT t FROM TraitAEffets t LEFT JOIN FETCH t.effets WHERE t.type = 'HERITAGE'")
	public List<TraitAEffets> findAllTraitHeritage();
	
	@Query("SELECT t FROM TraitAEffets t LEFT JOIN FETCH t.effets WHERE t.type='HERITAGE' AND t.id=:id")
	public TraitAEffets findTraitHeritageById(@Param("id") Integer id);
	
	// Traits liés à l'éducation
	@Query("FROM TraitEducation")
	public List<TraitEducation> findAllTraitEducation();
	
	@Query("SELECT t FROM TraitEducation t WHERE t.id=:id")
	public TraitEducation findTraitEducationById(@Param("id") Integer id);
	
	// Traits de récompense de la boutique
	@Query("FROM TraitBoutique")
	public List<TraitBoutique> findAllTraitBoutique();
	
	@Query("SELECT t FROM TraitBoutique t WHERE t.id=:id")
	public TraitBoutique findTraitBoutiqueById(@Param("id") Integer id);
	
	// Traits de récompense de carrière
	@Query("SELECT t FROM TraitACondition t WHERE t.type = 'CARRIERE'")
	public List<TraitACondition> findAllTraitCarriere();
	
	@Query("SELECT t FROM TraitACondition t WHERE t.type='CARRIERE' AND t.id=:id")
	public TraitACondition findTraitCarriereById(@Param("id") Integer id);
	
	// Traits de récompense de nourriture
	@Query("SELECT t FROM TraitACondition t WHERE t.type = 'NOURRITURE'")
	public List<TraitACondition> findAllTraitNourriture();
	
	@Query("SELECT t FROM TraitACondition t WHERE t.type='NOURRITURE' AND t.id=:id")
	public TraitACondition findTraitNourritureById(@Param("id") Integer id);
	
	// Traits de récompense d'excursion
	@Query("SELECT t FROM TraitACondition t WHERE t.type = 'MONTAGNE'")
	public List<TraitACondition> findAllTraitMontagne();
	
	@Query("SELECT t FROM TraitACondition t WHERE t.type='MONTAGNE' AND t.id=:id")
	public TraitACondition findTraitMontagneById(@Param("id") Integer id);
	
	// Traits de maladie
	@Query("SELECT t FROM TraitACondition t WHERE t.type = 'MALADIE'")
	public List<TraitACondition> findAllTraitMaladie();
	
	@Query("SELECT t FROM TraitACondition t WHERE t.type='MALADIE' AND t.id=:id")
	public TraitACondition findTraitMaladieById(@Param("id") Integer id);
	
	// Traits de récompense de compétence
	@Query("SELECT t FROM TraitACondition t WHERE t.type = 'COMPETENCE'")
	public List<TraitACondition> findAllTraitCompetence();
	
	@Query("SELECT t FROM TraitACondition t WHERE t.type='COMPETENCE' AND t.id=:id")
	public TraitACondition findTraitCompetenceById(@Param("id") Integer id);
	
	// Traits de style de vie
	@Query("SELECT t FROM TraitAEffets t WHERE t.type = 'STYLE_DE_VIE'")
	public List<TraitAEffets> findAllTraitStyleDeVie();
	
	@Query("SELECT t FROM TraitAEffets t WHERE t.type='STYLE_DE_VIE' AND t.id=:id")
	public TraitAEffets findTraitStyleDeVieById(@Param("id") Integer id);
}
