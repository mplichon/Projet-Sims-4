package sims.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sims.dao.IDAOAspiration;
import sims.model.Aspiration;

@Service
public class AspirationService {

	@Autowired
	IDAOAspiration daoAspiration;
	
	public Aspiration getById(Integer id)
	{
		Optional<Aspiration> opt = daoAspiration.findById(id);
		if(opt.isEmpty()) {return null;}
		else {return opt.get();}
	}
	
	public Aspiration getByIdWithEtapes(Integer id)
	{
		return daoAspiration.findByIdWithEtapes(id);
	}
	
	public List<Aspiration> getAll()
	{
		return daoAspiration.findAll();
	}
	
	public List<Aspiration> getAllWithEtapes()
	{
		return daoAspiration.findAllWithEtapes();
	}
	
	public Aspiration create(Aspiration aspiration) 
	{
		return daoAspiration.save(aspiration);
	}

	public Aspiration update(Aspiration aspiration) 
	{
		return daoAspiration.save(aspiration);
	}

	public void deleteById(Integer id) 
	{
		daoAspiration.deleteById(id);
	}

	public void delete(Aspiration aspiration)
	{
		daoAspiration.delete(aspiration);
	}
}
