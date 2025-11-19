package sims.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import sims.model.CategorieSim;
import sims.model.Competence;

public interface IDAOCompetence extends JpaRepository<Competence, Integer> {
	
	public List<Competence> findAllByCategorieSim(CategorieSim categorieSim);
	
	@Query("SELECT c FROM Competence c ORDER BY c.nom ASC")
	public List<Competence> findAllOrderByNomAsc();
}
