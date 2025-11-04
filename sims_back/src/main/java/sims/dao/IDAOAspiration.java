package sims.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sims.model.Aspiration;

public interface IDAOAspiration extends JpaRepository<Aspiration, Integer>{
	
	@Query("SELECT DISTINCT a from Aspiration a LEFT JOIN FETCH a.etapes e LEFT JOIN FETCH e.sousEtapes")
	public List<Aspiration> findAllWithEtapes();
	
	@Query("SELECT a from Aspiration a LEFT JOIN FETCH a.etapes e LEFT JOIN FETCH e.sousEtapes WHERE a.id=:id")
	public Aspiration findByIdWithEtapes(@Param("id") Integer id);
}
