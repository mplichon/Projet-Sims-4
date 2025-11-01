package sims.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sims.model.CategorieSim;
import sims.model.Competence;

public interface IDAOCompetence extends JpaRepository<Competence, Integer> {
	
	public List<Competence> findAllByCategorieSim(CategorieSim categorieSim);
}
