package sims.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sims.dao.IDAOCompetence;
import sims.model.CategorieSim;
import sims.model.Competence;

@Service
public class CompetenceService {

	@Autowired
	IDAOCompetence daoCompetence;
	
	public Competence getById(Integer id)
	{
		Optional<Competence> opt = daoCompetence.findById(id);
		if(opt.isEmpty()) {return null;}
		else {return opt.get();}
	}
	
	public List<Competence> getAll()
	{
		return daoCompetence.findAll();
	}
	
	public List<Competence> getAllOrderByNomAsc()
	{
		return daoCompetence.findAllOrderByNomAsc();
	}
	
	public List<Competence> getAllByCategorieSim(CategorieSim categorieSim)
	{
		return daoCompetence.findAllByCategorieSim(categorieSim);
	}
	
	public Competence create(Competence competence) 
	{
		return daoCompetence.save(competence);
	}

	public Competence update(Competence competence) 
	{
		return daoCompetence.save(competence);
	}

	public void deleteById(Integer id) 
	{
		daoCompetence.deleteById(id);
	}

	public void delete(Competence competence)
	{
		daoCompetence.delete(competence);
	}
}
