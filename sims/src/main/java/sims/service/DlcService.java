package sims.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sims.dao.IDAODlc;
import sims.model.DLC;
import sims.model.TypeDLC;

@Service
public class DlcService {
	
	@Autowired
	IDAODlc daoDlc;
	
	public DLC getById(Integer id)
	{
		Optional<DLC> opt = daoDlc.findById(id);
		if(opt.isEmpty()) {return null;}
		else {return opt.get();}
	}
	
	public List<DLC> getAll()
	{
		return daoDlc.findAll();
	}
	
	public List<DLC> getAllOrderByNomAsc()
	{
		return daoDlc.findAllOrderByNomAsc();
	}
	
	public List<DLC> getAllByType(TypeDLC type)
	{
		return daoDlc.findAllByType(type);
	}
	
	public List<DLC> getAllOrderByDateSortieAsc()
	{
		return daoDlc.findAllOrderByDateSortieAsc();
	}
	
	public DLC create(DLC dlc) 
	{
		return daoDlc.save(dlc);
	}

	public DLC update(DLC dlc) 
	{
		return daoDlc.save(dlc);
	}

	public void deleteById(Integer id) 
	{
		daoDlc.deleteById(id);
	}

	public void delete(DLC dlc)
	{
		daoDlc.delete(dlc);
	}
}
