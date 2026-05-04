package sims.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sims.dao.IDAOCarriere;
import sims.model.Carriere;
import sims.model.TypeCarriere;

@Service
public class CarriereService {

	@Autowired
	IDAOCarriere daoCarriere;
	
	public List<TypeCarriere> getAllTypeCarriere() {
		return Arrays.asList(TypeCarriere.values());
	}
	
	public Carriere getById(Integer id)
	{
		Optional<Carriere> opt = daoCarriere.findById(id);
		if(opt.isEmpty()) {return null;}
		else {return opt.get();}
	}
	
	public Carriere getByIdWithRangs(Integer id)
	{
		return daoCarriere.findByIdWithRangs(id);
	}
	
	public List<Carriere> getAll()
	{
		return daoCarriere.findAll();
	}
	
	public List<Carriere> getAllWithRangs()
	{
		return daoCarriere.findAllWithRangs();
	}

	public List<Carriere> getAllOrderByNomAsc() {
		return daoCarriere.findAllOrderByNomAsc();
	}
	
	public Carriere create(Carriere carriere) 
	{
		return daoCarriere.save(carriere);
	}

	public Carriere update(Carriere carriere) 
	{
		return daoCarriere.save(carriere);
	}

	public void deleteById(Integer id) 
	{
		daoCarriere.deleteById(id);
	}

	public void delete(Carriere carriere)
	{
		daoCarriere.delete(carriere);
	}
}
