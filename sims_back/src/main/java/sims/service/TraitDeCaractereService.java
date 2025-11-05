package sims.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sims.dao.IDAOTraitDeCaractere;
import sims.model.TraitACondition;
import sims.model.TraitAEffets;
import sims.model.TraitAspiration;
import sims.model.TraitBonus;
import sims.model.TraitBoutique;
import sims.model.TraitDeCaractere;
import sims.model.TraitEducation;

@Service
public class TraitDeCaractereService {
	
	@Autowired
	IDAOTraitDeCaractere daoTraitDeCaractere;
	
	public TraitDeCaractere getById(Integer id)
	{
		Optional<TraitDeCaractere> opt = daoTraitDeCaractere.findById(id);
		if(opt.isEmpty()) {return null;}
		else {return opt.get();}
	}
	
	public List<TraitDeCaractere> getAll()
	{
		return daoTraitDeCaractere.findAll();
	}
	
	public TraitDeCaractere create(TraitDeCaractere trait) 
	{
		return daoTraitDeCaractere.save(trait);
	}

	public TraitDeCaractere update(TraitDeCaractere trait) 
	{
		return daoTraitDeCaractere.save(trait);
	}

	public void deleteById(Integer id) 
	{
		daoTraitDeCaractere.deleteById(id);
	}

	public void delete(TraitDeCaractere trait)
	{
		daoTraitDeCaractere.delete(trait);
	}
	
	// Traits de base
	public List<TraitDeCaractere> getAllTraitBase()
	{
		return daoTraitDeCaractere.findAllTraitBase();
	}
	
	public TraitDeCaractere getTraitBaseById(Integer id)
	{
		return daoTraitDeCaractere.findTraitBaseById(id);
	}
	
	// Traits de fantôme
	public List<TraitDeCaractere> getAllTraitFantome()
	{
		return daoTraitDeCaractere.findAllTraitFantome();
	}
	
	public TraitDeCaractere getTraitFantomeById(Integer id)
	{
		return daoTraitDeCaractere.findTraitFantomeById(id);
	}
	
	// Traits bonus
	public List<TraitBonus> getAllTraitBonus()
	{
		return daoTraitDeCaractere.findAllTraitBonus();
	}
	
	public TraitBonus getTraitBonusById(Integer id)
	{
		return daoTraitDeCaractere.findTraitBonusById(id);
	}
	
	// Traits temporaires de l'enfance
	public List<TraitDeCaractere> getAllTraitEnfance()
	{
		return daoTraitDeCaractere.findAllTraitEnfance();
	}
	
	public TraitDeCaractere getTraitEnfanceById(Integer id)
	{
		return daoTraitDeCaractere.findTraitEnfanceById(id);
	}
	
	// Traits de récompense d'aspiration
	public List<TraitAspiration> getAllTraitAspiration()
	{
		return daoTraitDeCaractere.findAllTraitAspiration();
	}
	
	public TraitAspiration getTraitAspirationById(Integer id)
	{
		return daoTraitDeCaractere.findTraitAspirationById(id);
	}
	
	// Traits d'héritage
	public List<TraitAEffets> getAllTraitHeritage()
	{
		return daoTraitDeCaractere.findAllTraitHeritage();
	}
	
	public TraitAEffets getTraitHeritageById(Integer id)
	{
		return daoTraitDeCaractere.findTraitHeritageById(id);
	}
	
	// Traits liés à l'éducation
	public List<TraitEducation> getAllTraitEducation()
	{
		return daoTraitDeCaractere.findAllTraitEducation();
	}
	
	public TraitEducation getTraitEducationById(Integer id)
	{
		return daoTraitDeCaractere.findTraitEducationById(id);
	}
	
	// Traits de récompense de la boutique
	public List<TraitBoutique> getAllTraitBoutique()
	{
		return daoTraitDeCaractere.findAllTraitBoutique();
	}
	
	public TraitBoutique getTraitBoutiqueById(Integer id)
	{
		return daoTraitDeCaractere.findTraitBoutiqueById(id);
	}
	
	// Traits de récompense de carrière
	public List<TraitACondition> getAllTraitCarriere()
	{
		return daoTraitDeCaractere.findAllTraitCarriere();
	}
	
	public TraitACondition getTraitCarriereById(Integer id)
	{
		return daoTraitDeCaractere.findTraitCarriereById(id);
	}
	
	// Traits de récompense de nourriture
	public List<TraitACondition> getAllTraitNourriture()
	{
		return daoTraitDeCaractere.findAllTraitNourriture();
	}
	
	public TraitACondition getTraitNourritureById(Integer id)
	{
		return daoTraitDeCaractere.findTraitNourritureById(id);
	}
	
	// Traits de récompense d'excursion
	public List<TraitACondition> getAllTraitMontagne()
	{
		return daoTraitDeCaractere.findAllTraitMontagne();
	}
	
	public TraitACondition getTraitMontagneById(Integer id)
	{
		return daoTraitDeCaractere.findTraitMontagneById(id);
	}
	
	// Traits de maladie
	public List<TraitACondition> getAllTraitMaladie()
	{
		return daoTraitDeCaractere.findAllTraitMaladie();
	}
	
	public TraitACondition getTraitMaladieById(Integer id)
	{
		return daoTraitDeCaractere.findTraitMaladieById(id);
	}
	
	// Traits de récompense de compétence
	public List<TraitACondition> getAllTraitCompetence()
	{
		return daoTraitDeCaractere.findAllTraitCompetence();
	}
	
	public TraitACondition getTraitCompetenceById(Integer id)
	{
		return daoTraitDeCaractere.findTraitCompetenceById(id);
	}
	
	// Traits de style de vie
	public List<TraitAEffets> getAllTraitStyleDeVie()
	{
		return daoTraitDeCaractere.findAllTraitStyleDeVie();
	}
	
	public TraitAEffets getTraitStyleDeVieById(Integer id)
	{
		return daoTraitDeCaractere.findTraitStyleDeVieById(id);
	}
}
